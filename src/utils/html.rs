use crate::nostr::{post_code_and_wait_for_execution, Notebook, NotebookCells};
use askama::Template;
use axum::{
    debug_handler,
    http::StatusCode,
    response::{Html, IntoResponse, Response},
    Form, Json, extract::Query,
};
use chrono::TimeZone;
use nostro2::userkeys::UserKeys;
use serde::Deserialize;
use tracing::log::info;

#[derive(Template)]
#[template(path = "layout.html")]
struct HomepageTemplate;

pub async fn homepage() -> impl IntoResponse {
    HtmlTemplate(HomepageTemplate {})
}

#[derive(Template)]
#[template(path = "home.html")]
struct HomeTemplate;

pub async fn home() -> impl IntoResponse {
    HtmlTemplate(HomeTemplate {})
}

#[derive(Template)]
#[template(path = "creator.html")]
struct CreatorTemplate;

pub async fn creator() -> impl IntoResponse {
    HtmlTemplate(CreatorTemplate {})
}

#[derive(Template)]
#[template(path = "editor.html")]
struct WriterTemplate;

pub async fn editor() -> impl IntoResponse {
    HtmlTemplate(WriterTemplate {})
}

#[derive(Template)]
#[template(path = "search.html")]
struct ReaderTemplate;

pub async fn reader() -> impl IntoResponse {
    HtmlTemplate(ReaderTemplate {})
}

#[derive(Template)]
#[template(path = "notebook.html")]
pub struct NotebookTemplate {
    notebook_cells: Vec<NotebookCells>,
}

#[derive(Template)]
#[template(path = "code-response.html")]
pub struct ExecutionResponseTemplate {
    code_execution: CodeExecutions,
}

pub struct CodeExecutions {
    _input: String,
    response: String,
    _success: bool,
}

#[derive(Template)]
#[template(path = "post-notebook.html")]
pub struct PostNotebookTemplate {
    posted: bool,
}

#[derive(Template)]
#[template(path = "staticCellDetail.html")]
pub struct StaticCellDetailTemplate {
    markdown: String,
    timestamp: u64,
    author: String,
    event_id: String,
}

#[derive(Template)]
#[template(path = "staticCellList.html")]
pub struct StaticCellListTemplate {
    notebook_cells: Vec<StaticCellResponse>,
}

#[derive(Deserialize, Debug)]
pub struct StaticCellResponse {
    pub markdown: String,
    pub timestamp: u64,
    pub author: String,
    pub event_id: String,
}

impl StaticCellResponse {
    pub fn get_timestamp_from_unix(&self) -> String {
        let dt = chrono::Utc.timestamp_opt(self.timestamp as i64, 0).unwrap();
        dt.to_rfc2822()
    }
}

#[derive(serde::Deserialize, Debug)]
pub struct NotebookSearchRequest {
    pub notebook_pubkey: String,
    pub relay: String,
}

#[derive(Deserialize, Debug)]
pub struct NotebookSearchResponse {
    pub notebook_cells: Vec<NotebookCells>,
}

pub async fn notebook_from_pubkey(form: Query<NotebookSearchRequest>) -> impl IntoResponse {
    match Notebook::find_notebook(
        &form.relay,
        &form.notebook_pubkey, 
    )
    .await
    {
        Some(notebook) => HtmlTemplate(NotebookTemplate {
            notebook_cells: notebook.get_notebook_cells(),
        }),
        None => {
            info!("No notebook found.");
            HtmlTemplate(NotebookTemplate {
                notebook_cells: vec![],
            })
        }
    }
}

pub async fn notebook_cells_from_pubkey(form: Query<NotebookSearchRequest>) -> impl IntoResponse {
    
    match NotebookCells::find_static_cells(
        &form.relay,
        &form.notebook_pubkey, 
    )
    .await
    {
        Ok(mut notebook) => HtmlTemplate(StaticCellListTemplate {
            notebook_cells: notebook.iter_mut().map(|cell| {
                StaticCellResponse {
                    markdown: cell.get_content().to_string(),
                    timestamp: cell.get_created_at(),
                    author: cell.get_pubkey().to_string(),
                    event_id: cell.get_id().to_string(),
                }
            }).collect(),
        }),
        Err(_) => {
            info!("No notebook found.");
            HtmlTemplate(StaticCellListTemplate {
                notebook_cells: vec![],
            })
        }
    }
}


#[derive(Deserialize, Debug)]
pub struct IndexPostRequest {
    pub index: String,
    pub relay: String,
    pub private_key: String
}

pub async fn post_notebook_index(response: Json<IndexPostRequest>) -> impl IntoResponse {
    let index = serde_json::from_str(&response.index.to_owned()).unwrap();
    match Notebook::post_index_note(index, &response.relay, &response.private_key).await {
        Ok(_) => HtmlTemplate(PostNotebookTemplate { posted: true }),
        Err(_) => HtmlTemplate(PostNotebookTemplate { posted: false }),
    }
}

#[derive(serde::Deserialize, Debug)]
pub struct UserCodeInput {
    pub code_string: String,
    pub private_key: String,
    pub relay: String,
}

pub async fn code_execution(user_code_input: Form<UserCodeInput>) -> impl IntoResponse {
    info!("Client wants to run: {:?}", &user_code_input);
    let _input = user_code_input.code_string.to_owned();
    if let Some(response) = post_code_and_wait_for_execution(&_input, &user_code_input.relay, &user_code_input.private_key).await {
        let _success = true;
        let code_execution = CodeExecutions {
            _input,
            response: response.get_content().to_string(),
            _success,
        };
        HtmlTemplate(ExecutionResponseTemplate { code_execution })
    } else {
        let response = format!("We ran this code: {} and failed", _input);
        let _success = false;
        let code_execution = CodeExecutions {
            _input,
            response,
            _success,
        };
        HtmlTemplate(ExecutionResponseTemplate { code_execution })
    }
}

#[derive(Deserialize, Debug)]
pub struct StaticCellPost {
    pub markdown: String,
    pub private_key: String,
    pub relay: String,
}

#[debug_handler]
pub async fn post_static_cell(Form(static_cell_post): Form<StaticCellPost>) -> impl IntoResponse {
    info!("Client wants to post: {:?}", &static_cell_post.markdown);
    match NotebookCells::create_static_cell(&static_cell_post.markdown, &static_cell_post.relay, &static_cell_post.private_key)
        .await
    {
        Ok(_) => HtmlTemplate(PostNotebookTemplate { posted: true }),
        Err(_) => HtmlTemplate(PostNotebookTemplate { posted: false }),
    }
}
#[derive(Deserialize, Debug)]
pub struct CellDetailPost {
    pub event_id: String,
    pub relay: String,
}

pub async fn find_static_cell_detail(
    Form(cell_detail_post): Form<CellDetailPost>,
) -> impl IntoResponse {
    info!(
        "Client wants to get static cell detail: {:?}",
        &cell_detail_post.event_id
    );
    match NotebookCells::find_single_static_cell(
        &cell_detail_post.relay,
        &cell_detail_post.event_id,
    )
    .await
    {
        Ok(cell) => {
            let markdown = cell.get_content().to_string();
            let timestamp = cell.get_created_at();
            let author = cell.get_pubkey().to_string();
            let event_id = cell.get_id().to_string();
            HtmlTemplate(StaticCellDetailTemplate {
                markdown,
                timestamp,
                author,
                event_id,
            })
        }
        Err(_) => HtmlTemplate(StaticCellDetailTemplate {
            markdown: "No cell found".to_string(),
            timestamp: 0,
            author: "No author found".to_string(),
            event_id: "No event id found".to_string(),
        }),
    }
}

#[derive(Template)]
#[template(path = "userKeys.html")]
pub struct UserKeysTemplate {
    private_key: String,
    public_key: String,
}

fn generate_random_hex_string() -> String {
    let mut byte_vector = vec![0u8; 32];
    byte_vector.iter_mut().for_each(|byte| {
        *byte = rand::random::<u8>();
    });
    hex::encode(byte_vector)
}

pub async fn get_user_keypair() -> impl IntoResponse {
    let random_hex_string = generate_random_hex_string(); 
    info!("Client wants to get user keypair for: {:?}", &random_hex_string);
    match UserKeys::new(&random_hex_string) {
        Ok(user_keys) => HtmlTemplate(UserKeysTemplate {
            private_key: random_hex_string.to_string(),
            public_key: user_keys.get_public_key().to_string(),
        }),
        Err(_) => HtmlTemplate(UserKeysTemplate{
            private_key: "No private key found".to_string(),
            public_key: "No public key found".to_string(),
        }),
    }
}

#[derive(Deserialize, Debug)]
pub struct UserKeysCheck {
    pub private_key: String,
}

pub async fn check_user_keypair(form: Form<UserKeysCheck>) -> impl IntoResponse {
    match UserKeys::new(&form.private_key) {
        Ok(user_keys) => HtmlTemplate(UserKeysTemplate {
            private_key: form.private_key.to_string(),
            public_key: user_keys.get_public_key().to_string(),
        }),
        Err(_) => HtmlTemplate(UserKeysTemplate{
            private_key: "No private key found".to_string(),
            public_key: "No public key found".to_string(),
        }),
    }
}


        
pub struct HtmlTemplate<T>(T);
impl<T> IntoResponse for HtmlTemplate<T>
where
    T: Template,
{
    fn into_response(self) -> Response {
        match self.0.render() {
            Ok(html) => Html(html).into_response(),

            Err(e) => (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Failed To Template HTML: {}", e),
            )
                .into_response(),
        }
    }
}
