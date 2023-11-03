use nostro2::{
    notes::{Note, SignedNote},
    relays::{NostrRelay, RelayErrors, RelayEvents},
};
use serde_json::{json, to_string_pretty, Value};
use tracing::log::info;
use serde::Deserialize;

pub struct Notebook {
    index: SignedNote,
    cells: Vec<NotebookCells>,
}
#[derive(Debug, Deserialize)]
pub enum NotebookCells {
    Static(SignedNote),
    Active(SignedNote),
}

impl NotebookCells {

    pub fn get_markdown_content(&self) -> String {
        match self {
            Self::Static(note) => note.get_content().to_string(),
            Self::Active(note) => note.get_content().to_string(),
        }
    }
    pub fn get_cell_id(&self) -> String {
        match self {
            Self::Static(note) => note.get_id().to_string(),
            Self::Active(note) => note.get_id().to_string(),
        }
    }
    pub fn get_notebook_pubkey(&self) -> String {
        match self {
            Self::Static(note) => note.get_pubkey().to_string(),
            Self::Active(note) => note.get_pubkey().to_string(),
        }
    }
    pub fn get_cell_timestamp(&self) -> u64{
        match self {
            Self::Static(note) => note.get_created_at(),
            Self::Active(note) => note.get_created_at(),
        }
    }

    pub async fn create_static_cell(markdown: &str, relay: &str, private_key: &str) -> Result<(), RelayErrors> {
        if let Ok(my_nostr_user) = nostro2::userkeys::UserKeys::new(private_key) {
            let note = Note::new(my_nostr_user.get_public_key(), 401, markdown);
            let signed_note = my_nostr_user.sign_nostr_event(note);
            info!("Code Note: {}", to_string_pretty(&signed_note).unwrap());
            match NostrRelay::new(relay).await {
                Err(e) => {
                    info!("{:?}", e);
                    return Err(e);
                }
                Ok(relay_connection) => match relay_connection.send_note(signed_note).await {
                    Err(e) => {
                        info!("{:?}", e);
                        return Err(e);
                    }
                    Ok(_) => {
                        info!("Sent notebook cell");
                        match relay_connection.close().await {
                            Ok(_) => return Ok(()),
                            Err(e) => return Err(e),
                        }
                    }
                },
            }
        } else {
            Err(RelayErrors::SubscriptionError(
                "Error creating user keys".to_string(),
            ))
        }
    }

    pub async fn create_active_cell(code: &str, relay: &str, private_key: &str) -> Result<(), RelayErrors> {
        if let Ok(my_nostr_user) = nostro2::userkeys::UserKeys::new(private_key) {
            let note = Note::new(my_nostr_user.get_public_key(), 402, code);
            let signed_note = my_nostr_user.sign_nostr_event(note);
            info!("Code Note: {}", to_string_pretty(&signed_note).unwrap());
            match NostrRelay::new(relay).await {
                Err(e) => {
                    info!("{:?}", e);
                    return Err(e);
                }
                Ok(relay_connection) => match relay_connection.send_note(signed_note).await {
                    Err(e) => {
                        info!("{:?}", e);
                        return Err(e);
                    }
                    Ok(_) => {
                        info!("Sent notebook cell");
                        match relay_connection.close().await {
                            Ok(_) => return Ok(()),
                            Err(e) => return Err(e),
                        }
                    }
                },
            }
        } else {
            Err(RelayErrors::SubscriptionError(
                "Error creating user keys".to_string(),
            ))
        }
    }

    pub async fn find_single_static_cell(relay: &str, id: &str) -> Result<SignedNote, RelayErrors> {
        info!("Looking for: {}", relay);
        match NostrRelay::new(relay).await {
            Err(e) => {
                info!("{:?}", e);
                return Err(e);
            }
            Ok(relay_connection) => {
                let filter: Value = json!({
                    "ids": [id],
                });
                info!("Filter: {}", filter);
                match relay_connection.subscribe(filter).await {
                    Err(e) => {
                        info!("{:?}", e);
                        return Err(e);
                    }
                    Ok(_) => {
                        while let Some(Ok(relay_message)) = relay_connection.read_from_relay().await
                        {
                            match relay_message {
                                RelayEvents::EVENT(_event, _id, signed_note) => {
                                    info!("Found notebook cell");
                                    return Ok(signed_note);
                                }
                                RelayEvents::EOSE(_event, notice) => {
                                    info!("End of search: {}", notice);
                                    relay_connection.close().await.unwrap();
                                    break;
                                }
                                RelayEvents::OK(_event, id, _success, _notice) => {
                                    info!("OK: {}", id);
                                    continue;
                                }
                                RelayEvents::NOTICE(_event, notice) => {
                                    info!("Notice: {}", notice);
                                    continue;
                                }
                            }
                        }
                        Err(RelayErrors::SubscriptionError("No cell found".to_string()))
                    }
                }
            }
        }
    }
    pub async fn find_static_cells(relay: &str, public_key: &str) -> Result<Vec<SignedNote>, RelayErrors> {
        let mut notebook_cells: Vec<SignedNote> = vec![];
        match NostrRelay::new(relay).await {
            Err(e) => {
                info!("{:?}", e);
                return Err(e);
            }
            Ok(relay_connection) => {
                let filter: Value = json!({
                    "kinds": [401],
                    "authors": [public_key],
                    "limit": 25,
                });
                info!("Filter: {}", filter);
                match relay_connection.subscribe(filter).await {
                    Err(e) => {
                        info!("{:?}", e);
                        return Err(e);
                    }
                    Ok(_) => {
                        while let Some(Ok(relay_message)) = relay_connection.read_from_relay().await
                        {
                            match relay_message {
                                RelayEvents::EVENT(_event, _id, signed_note) => {
                                    info!("Found notebook cell");
                                    notebook_cells.push(signed_note);
                                }
                                RelayEvents::EOSE(_event, notice) => {
                                    info!("End of search: {}", notice);
                                    relay_connection.close().await.unwrap();
                                    break;
                                }
                                RelayEvents::OK(_event, id, _success, _notice) => {
                                    info!("OK: {}", id);
                                    continue;
                                }
                                RelayEvents::NOTICE(_event, notice) => {
                                    info!("Notice: {}", notice);
                                    continue;
                                }
                            }
                        }
                        Ok(notebook_cells)
                    }
                }
            }
        }
    }
}

impl Notebook {

    pub fn get_notebook_cells(self) -> Vec<NotebookCells> {
        self.cells
    }

    pub async fn find_notebook(relay: &str, notebook: &str) -> Option<Self> {
        if let Some(index) = Self::find_notebook_index(relay, notebook).await {
            if let Ok(cells) = Self::find_notebook_cells(&index, relay).await {
                Some(Self { index, cells })
            } else {
                None
            }
        } else {
            None
        }
    }

    async fn find_notebook_index(relay: &str, notebook: &str) -> Option<SignedNote> {
        match NostrRelay::new(relay).await {
            Err(e) => {
                info!("{:?}", e);
                return None;
            }
            Ok(relay_connection) => {
                let filter: Value = json!({
                    "kinds": [400],
                    "limit": 1,
                    "authors": [notebook],
                });

                match relay_connection.subscribe(filter).await {
                    Err(e) => {
                        info!("{:?}", e);
                        return None;
                    }
                    Ok(_) => {
                        while let Some(Ok(relay_message)) = relay_connection.read_from_relay().await
                        {
                            match relay_message {
                                RelayEvents::EVENT(_event, _id, signed_note) => {
                                    info!("Found notebook index");
                                    return Some(signed_note);
                                }
                                RelayEvents::EOSE(_event, notice) => {
                                    info!("End of search: {}", notice);
                                    return None;
                                }
                                RelayEvents::OK(_event, id, _success, _notice) => {
                                    info!("OK: {}", id);
                                    continue;
                                }
                                RelayEvents::NOTICE(_event, notice) => {
                                    info!("Notice: {}", notice);
                                    continue;
                                }
                            }
                        }
                        None
                    }
                }
            }
        }
    }

    async fn find_notebook_cells(
        index: &SignedNote,
        relay: &str,
    ) -> Result<Vec<NotebookCells>, RelayErrors> {
        let note_index: Vec<String> = index.get_tags_by_id("i");
        let mut notebook_cells: Vec<NotebookCells> = vec![];
        match NostrRelay::new(relay).await {
            Err(e) => {
                info!("{:?}", e);
                return Err(e);
            }
            Ok(relay_connection) => {
                let filter: Value = json!({
                    "kinds": [401, 402],
                    "ids": note_index,
                });

                match relay_connection.subscribe(filter).await {
                    Err(e) => {
                        info!("{:?}", e);
                        return Err(e);
                    }
                    Ok(_) => {
                        while let Some(Ok(relay_message)) = relay_connection.read_from_relay().await
                        {
                            match relay_message {
                                RelayEvents::EVENT(_event, _id, signed_note) => {
                                    if signed_note.get_kind() == 401 {
                                        info!("Found notebook cell");
                                        notebook_cells.push(NotebookCells::Static(signed_note));
                                    } else if signed_note.get_kind() == 402 {
                                        info!("Found notebook cell");
                                        notebook_cells.push(NotebookCells::Active(signed_note));
                                    } else {
                                        info!("Not a notebook cell");
                                    }
                                }
                                RelayEvents::EOSE(_event, notice) => {
                                    info!("End of search: {}", notice);
                                    break;
                                }
                                RelayEvents::OK(_event, id, _success, _notice) => {
                                    info!("OK: {}", id);
                                    continue;
                                }
                                RelayEvents::NOTICE(_event, notice) => {
                                    info!("Notice: {}", notice);
                                    continue;
                                }
                            }
                        }
                        Ok(notebook_cells)
                    }
                }
            }
        }
    }

    fn build_index_note(note_list: Vec<String>, private_key:&str) -> SignedNote {
        if let Ok(my_nostr_user) = nostro2::userkeys::UserKeys::new(private_key) {
            let mut note = Note::new(
                my_nostr_user.get_public_key(),
                400,
                &format!(
                    "Notebook Published By: {:?}",
                    my_nostr_user.get_public_key()
                ),
            );
            for cell in note_list {
                note.tag_note("i", &cell);
            }
            note.tag_note("l", "rust");
            let signed_note = my_nostr_user.sign_nostr_event(note);
            info!("Code Note: {}", to_string_pretty(&signed_note).unwrap());
            signed_note
        } else {
            panic!("Error creating user keys");
        }
    }

    pub async fn post_index_note(note_list: Vec<String>, relay: &str, private_key:&str) -> Result<(), RelayErrors> {
        let note = Self::build_index_note(note_list, private_key);
        match NostrRelay::new(relay).await {
            Err(e) => {
                info!("{:?}", e);
                return Err(e);
            }
            Ok(relay_connection) => match relay_connection.send_note(note).await {
                Err(e) => {
                    info!("{:?}", e);
                    return Err(e);
                }
                Ok(_) => {
                    info!("Sent notebook index");
                    match relay_connection.close().await {
                        Ok(_) => return Ok(()),
                        Err(e) => return Err(e),
                    }
                }
            },
        }
    }
}


pub async fn post_notebook_cell(
    title: &str,
    author: &str,
    markdown: &str,
) -> Result<(), RelayErrors> {
    if let Ok(my_nostr_user) = nostro2::userkeys::UserKeys::new(author) {
        let mut note = Note::new(my_nostr_user.get_public_key(), 401, markdown);
        note.tag_note("I", title);
        let signed_note = my_nostr_user.sign_nostr_event(note);
        info!("Notebook Cell: {}", to_string_pretty(&signed_note).unwrap());
        let relay = NostrRelay::new("wss://relay.roadrunner.lat")
            .await
            .expect("Error");
        relay
            .send_note(signed_note)
            .await
            .expect("Error sending note");
        match relay.close().await {
            Ok(_) => return Ok(()),
            Err(e) => return Err(e),
        }
    } else {
        return Err(RelayErrors::SubscriptionError(
            "Error creating user keys".to_string(),
        ));
    }
}

fn create_code_note(code: &str, private_key: &str) -> SignedNote {
    if let Ok(my_nostr_user) = nostro2::userkeys::UserKeys::new(private_key) {
        let mut note = Note::new(my_nostr_user.get_public_key(), 300, code);
        note.tag_note("l", "rust");
        let signed_note = my_nostr_user.sign_nostr_event(note);
        info!("Code Note: {}", to_string_pretty(&signed_note).unwrap());
        signed_note
    } else {
        panic!("Error creating user keys");
    }
}

pub async fn post_code_and_wait_for_execution(code: &str,relay: &str, private_key: &str) -> Option<SignedNote> {
    let mut response_note: Option<SignedNote> = None;
    let note = create_code_note(code, private_key);

    let relay_connection = NostrRelay::new(relay)
        .await
        .expect("Error");
    let filter: Value = json!({
        "kinds": [301],
        "#a": [note.get_id()],
    });
    relay_connection.subscribe(filter).await.unwrap();
    relay_connection
        .send_note(note)
        .await
        .expect("Error sending note");
    while let Some(Ok(relay_message)) = relay_connection.read_from_relay().await {
        match relay_message {
            RelayEvents::EVENT(_event, _id, signed_note) => {
                info!(
                    "Server Responded with code execution {}",
                    to_string_pretty(&signed_note).unwrap()
                );
                response_note = Some(signed_note);
                break;
            }
            RelayEvents::EOSE(_event, notice) => {
                info!("End of search: {}", notice);
                // wait 5 seconds then return err
                continue;
            }
            RelayEvents::OK(_event, id, _success, _notice) => {
                info!("OK: {}", id);

                continue;
            }
            RelayEvents::NOTICE(_event, notice) => {
                info!("Notice: {}", notice);
                continue;
            }
        };
    }
    return response_note;
}

async fn create_code_response(code: &str, respond_to: &str, private_key: &str) -> SignedNote {
    if let Ok(server_nostr_user) = nostro2::userkeys::UserKeys::new(private_key) {
        let mut note = Note::new(server_nostr_user.get_public_key(), 17421, code);
        note.tag_note("ex", respond_to);
        note.tag_note("code", "RUST");
        let signed_note = server_nostr_user.sign_nostr_event(note);
        signed_note
    } else {
        panic!("Error creating user keys");
    }
}

pub async fn respond_to_code_execution(code: &str, respond_to: &str, private_key: &str) {
    let note = create_code_response(code, respond_to, private_key).await;
    let relay = NostrRelay::new("wss://relay.roadrunner.lat")
        .await
        .expect("Error");
    relay.send_note(note).await.expect("Error sending note");
    match relay.close().await {
        Ok(_) => info!("Sent Execution Message"),
        Err(e) => info!("Error closing connection: {:?}", e),
    }
}

