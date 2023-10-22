import { schnorr } from "@noble/curves/secp256k1";
import { sha256 } from "bitcoinjs-lib/src/crypto.js";
import { randomBytes, createCipheriv, createDecipheriv } from "crypto";
import { getSharedSecret } from "@noble/secp256k1";
import * as tinysecp from "tiny-secp256k1";
import { ECPairFactory } from "ecpair";

const ECPair = ECPairFactory(tinysecp);

// Crea un evento de subscripcion para pedir eventos de Nostr
// El filtro es un objeto con llaves determinadas por NIP01
// El id es unico y aleatorio para cada evento, permite detener la subscripcion
export class Subscription {
    private filter: {};

    private id: string;

    constructor(filter: {}) {
        this.filter = filter;
        this.id = randomBytes(16).toString("hex");
    }

    getNostrEvent(): string {
        return JSON.stringify(["REQ", this.id, this.filter]);
    }

    getId(): string {
        return this.id;
    }
}

// Crea un objeto con formato de evento publico listo para publicar en Nostr
export class Note {
    private content: string;

    private pubkey: string;

    private tags: [string[]] | [];

    private created_at: number = Math.floor(Date.now() / 1000);

    private kind: number;

    private id: string;

    private sig: string;

    constructor(
        content: string,
        kind: number,
        pubkey: string,
        tags: [string[]] | []
    ) {
        this.pubkey = pubkey;
        this.content = content;
        this.kind = kind;
        this.tags = tags;
        this.id = "";
        this.sig = "";
    }

    serializeEvent(): string {
        const nostrSerialized = JSON.stringify([
            0, // Reserved for future use
            this.pubkey, // the senders myNostrPubKey
            this.created_at, // UNIX timestamp
            this.kind, // Message "kind" or type
            this.tags, // Tags identify replies/recipients
            this.content, // Your note contents
        ]);
        return nostrSerialized;
    }

    getNostrEvent(): string {
        return JSON.stringify(["EVENT", this]);
    }
    
    getNostrId(): string {
        return this.id!;
    }
    
    getNostrSig(): string {
        return this.sig!;
    }

    addSignatures(sig: string, id: string): void {
        if (schnorr.verify(id, sig, this.pubkey)) {
            this.sig = sig;
            this.id = id;
        }
    }
}

// Crea un par de llaves (privada-publica) a partir de una llave privada en forma de texto
// Esta clase se utiliza para firmar los eventos de Nostr despachados
export class User {
    private privateKey: Buffer | undefined;
    private nostr: any | null; // Assuming `nostr` can be any object
    private publicKey: Buffer | undefined;

    private constructor() {}

    static async create(privateKey: string | null, nostr: any): Promise<User> {
        let user = new User();
        user.nostr = nostr;

        if (nostr) {
            user.publicKey = await nostr.getPublicKey();
        } else if (privateKey) {
            const keyBuffer = Buffer.from(privateKey, "hex");
            const keyPair = ECPair.fromPrivateKey(keyBuffer);
            user.privateKey = keyPair.privateKey!;
            user.publicKey = keyPair.publicKey;
        } else {
            throw new Error("Must provide either privateKey or nostr");
        }

        return user;
    }

    getPublicKey(): string {
        // Remove the first two characters as they are redundant and Nostr doesn't read them
        if (this.privateKey) {
            return this.publicKey!.toString("hex").substring(2);
        } else {
            return this.publicKey!.toString("hex");
        }
    }

    getPublicBuffer(): Buffer {
        return this.publicKey!;
    }

    async signEvent(event: Note): Promise<Note> {
        let signedEvent: Note;

        if (this.privateKey) {
            // Sign event with privateKey
            const id = sha256(Buffer.from(event.serializeEvent())).toString(
                "hex"
            );
            const newSig = schnorr.sign(event.getNostrId(), this.privateKey);
            const sig = Buffer.from(newSig).toString("hex");
            event.addSignatures(sig, id);
            signedEvent = event;
        } else if (this.nostr) {
            // Sign event with nostr object
            const signedEventData = await this.nostr.signEvent(event);
            signedEvent = new Note(
                signedEventData.content,
                signedEventData.kind,
                signedEventData.pubkey,
                signedEventData.tags
            );
            signedEvent.addSignatures(signedEventData.sig, signedEventData.id);
        } else {
            // Throw error if both privateKey and nostr object are null
            throw new Error(
                "Unable to sign event. Both privateKey and nostr object are null."
            );
        }

        return signedEvent;
    }

    async encryptText(text: string, receiver: string): Promise<string> {
        if (this.privateKey) {
            const cyphertext = encrypt(
                this.privateKey!.toString("hex"),
                receiver,
                text
            );
            return cyphertext;
        } else {
            const cyphertext: string = await this.nostr.nip04.encrypt(
                receiver,
                text
            );
            return cyphertext;
        }
    }

    async decryptText(cyphertext: string, sender: string): Promise<string> {
        if (this.privateKey) {
            const dmsg = decrypt(
                this.privateKey!.toString("hex"),
                sender,
                cyphertext
            );
            return dmsg;
        } else {
            const dmsg: string = await this.nostr.nip04.decrypt(
                sender,
                cyphertext
            );
            return dmsg;
        }
    }
}

export function encrypt(privkey: string, pubkey: string, text: string): string {
    const key = getSharedSecret(privkey, `02${pubkey}`, true);
    const iv = Uint8Array.from(randomBytes(16));
    const cipher = createCipheriv("aes-256-cbc", key.slice(1), iv);
    // console.log("latest error:", privkey, pubkey, text);
    const encryptedMessage = cipher.update(text, "utf8", "base64");
    const emsg = encryptedMessage + cipher.final("base64");

    return `${emsg}?iv=${Buffer.from(iv.buffer).toString("base64")}`;
}

export function decrypt(privkey: string, pubkey: string, ciphertext: string) {
    const [emsg, iv] = ciphertext.split("?iv=");
    const key = getSharedSecret(privkey, `02${pubkey}`, true);
    const decipher = createDecipheriv(
        "aes-256-cbc",
        key.slice(1),
        Buffer.from(iv!, "base64")
    );
    const decryptedMessage = decipher.update(emsg!, "base64");
    let dmsg: string;
    try {
        dmsg = decryptedMessage + decipher.final("utf8");
    } catch (e) {
        dmsg = "error decrypting message -- the message was malformed";
    }

    return dmsg;
}
