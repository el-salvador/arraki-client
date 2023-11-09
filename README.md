# arrakis-client

# Arrakis
- [Arrakis Gitlab](https://gitlab.praeparet.io/pupusabits) 
- npub18spn8phk6qz62s9hqtmxwm8zn5h3srcg5csvkvxyu84ddw6v4nlsnzpzaz || @42pupusas
- npub1nvjep398hedwuyfa3llkuxffgwerl6ed93uj3kj7mqjjetg09xpqn0dchn || @eujc21
## Nostr 
- Nostr is an open source protocol that enables global, decentralized, and censorship communication, which is currently under construction. The acronym stands for Notes and Other Stuff Transmitted by Relays. It was created by [fiatjaf](https://github.com/fiatjaf) , and you can currently find a great list of projects at [./awesome-nostr](https://www.nostr.net/)

### Nostr Clients
- Any technology that can handle websockets, can become a client.
- Web Applications
- Native Applications
- Backend Applications
- They fetch data from relays of their choice. 
- They can also publish a note to a relay of their choice
- Embedded in the protocol, the note can be formatted to interact with the filtering mechanism of the relays.
- Examples of Clients:
-  [Jester](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how): Play chess on Nostr
- [Habla](https://habla.news?utm_source=nostr.how&ref=nostr.how): Long-form content – like Medium
- [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how): Media focused social client
- [zap.stream](https://zap.stream/): Twitch-like streaming site with zaps
### Nostr Relays
- They are the backend of Nostr. They allow clients to send them messages.
- They can accept or deny to host those messages.
- Relays can be paid or free. 
- If "all" the relays go offline, all your posts will be unretrievable, that being said, you should run your own relay.
### Nostr Authentication
- "Each Nostr account is based on a public/private key pair. A simple way to think about this is that your public key is your username and your private key is your password, with one major caveat. Unlike a password, your private key cannot be reset if lost. "[nostr.how](https://nostr.how/en/get-started)


## Jupyter
#### **What is a Jupyter Notebook?**
- An open-source web application for creating and sharing documents with live code, equations, visualizations, and narrative text.
- Used for data cleaning and transformation, numerical simulation, statistical modeling, machine learning, and much more.
#### **History and Evolution**
- Originated from IPython in 2014, Jupyter supports over 40 programming languages.
- Named after the planets Jupiter and Galileo, symbolizing the tool’s intention to cover all languages like Jupiter's wide coverage of satellites.
#### **Key Features**
- Interactive coding environment with code cells, Markdown integration for documentation, and inline display of graphical outputs.
### Jupyter Notebook's User Interface

- **The Notebook Interface**
- Consists of a sequence of cells that can contain code, text (Markdown), equations (LaTeX), or rich media (images/videos).
- **Working with Cells**
- Code cells can be executed independently and display output below the cell.
- Markdown cells allow for rich text formatting to create a narrative around the code.
- **Toolbar and Shortcuts**
- A customizable toolbar with shortcuts for common actions to enhance productivity.

### Core Functionalities of Jupyter Notebooks
- **Code Execution**
- Execute code in a variety of languages (primarily Python, but also R, Julia, Scala, etc.).
- Immediate feedback for incremental development and data exploration.
- **Visualization and Multimedia**
- Integrate visualizations from libraries like Matplotlib, Seaborn, or Plotly directly into notebooks.
- Embed images, videos, and interactive widgets to create dynamic reports.
- **Collaboration and Sharing**
- Notebooks can be shared via email, GitHub, or as a static HTML page.
- Support for collaboration through JupyterHub and Google Colab.

### What is Wrong with Jupyter
- **Resource Intensive Operations**
- While Jupyter itself is relatively lightweight, intensive computational tasks can overwhelm the underlying node, whether it’s hosted locally or remotely.
- Centralized Application
- Services like JupyterHub, Binder, or other cloud-based solutions are all subject to policies and regulations of the hosting entity.
- Even when hosting the notebooks on platforms like github, they are subject to the jurisdiction of those platforms content policies.
- The notebooks themselves may contain metadata, that may reveal the authors identity if careful steps are not taken.
- Version Control
- Building a Docker Container is not as straight forward to version control the notebook
## Arrakis
#### Arrakis Architecture
- Arrakis Node is just another  Nostr client.
- It listens to the messages in which are of kind specified, to compile and run.
- 
