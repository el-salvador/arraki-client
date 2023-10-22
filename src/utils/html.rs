use crate::nostr::{
    find_demo_notebook, find_notebook_by_pubkey, post_code_and_wait_for_execution,
    post_notebook_cell, NotebookCells,
};
use askama::Template;
use axum::{
    debug_handler,
    http::StatusCode,
    response::{Html, IntoResponse, Response},
    Form,
};
use chrono::TimeZone;
use serde::Deserialize;
use tracing::log::info;

#[derive(Template)]
#[template(path = "layout.html")]
struct HomepageTemplate;

pub async fn homepage() -> impl IntoResponse {
    HtmlTemplate(HomepageTemplate {})
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
struct NotebookTemplate {
    notebook_cells: Vec<StaticCellResponse>,
}

#[derive(serde::Deserialize, Debug)]
pub struct NotebookSearchForm {
    pub notebook_pubkey: String,
    pub author_pubkey: String,
    pub event_id: String,
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

#[derive(Deserialize, Debug)]
pub struct NotebookResponse {
    pub notebook_cells: Vec<StaticCellResponse>,
}

pub async fn notebook(response: Form<NotebookSearchForm>) -> impl IntoResponse {
    info!("Client wants: {}", &response.notebook_pubkey);
    match find_notebook_by_pubkey(&response.notebook_pubkey).await {
        Some(raw_cells) => {
            let notebook_cells: Vec<StaticCellResponse> = raw_cells
                .iter()
                .map(|cell| {
                    let markdown = cell.get_content().to_string();
                    let timestamp = cell.get_created_at();
                    let author = cell.get_pubkey().to_string();
                    let event_id = cell.get_id().to_string();
                    StaticCellResponse {
                        markdown,
                        timestamp,
                        author,
                        event_id,
                    }
                })
                .collect::<Vec<StaticCellResponse>>();

            HtmlTemplate(NotebookTemplate { notebook_cells })
        }
        None => {
            info!("No notebook found.");
            HtmlTemplate(NotebookTemplate {
                notebook_cells: vec![],
            })
        }
    }
}

#[derive(Template)]
#[template(path = "code-response.html")]
struct ExecutionResponseTemplate {
    code_execution: CodeExecutions,
}

struct CodeExecutions {
    input: String,
    response: String,
    _success: bool,
}

#[derive(serde::Deserialize, Debug)]
pub struct UserCodeInput {
    pub code_string: String,
    pub note_author: String,
    pub note_id: String,
}
pub async fn code_execution(user_code_input: Form<UserCodeInput>) -> impl IntoResponse {
    info!("Client wants to run: {:?}", &user_code_input);
    let input = user_code_input.code_string.to_owned();
    if let Some(response) = post_code_and_wait_for_execution(&input).await {
        let _success = true;
        let code_execution = CodeExecutions {
            input,
            response: response.get_content().to_string(),
            _success,
        };
        HtmlTemplate(ExecutionResponseTemplate { code_execution })
    } else {
        let response = format!("We ran this code: {} and failed", input);
        let _success = false;
        let code_execution = CodeExecutions {
            input,
            response,
            _success,
        };
        HtmlTemplate(ExecutionResponseTemplate { code_execution })
    }
}

#[derive(Template)]
#[template(path = "post-notebook.html")]
pub struct PostNotebookTemplate {
    posted: bool,
}

#[derive(Deserialize, Debug)]
pub struct StaticCellPost {
    pub markdown: String,
    pub relay: String,
}

#[debug_handler]
pub async fn post_static_cell(Form(static_cell_post): Form<StaticCellPost>) -> impl IntoResponse {
    info!("Client wants to post: {:?}", &static_cell_post.markdown);
    match NotebookCells::create_static_cell(&static_cell_post.markdown, &static_cell_post.relay)
        .await
    {
        Ok(_) => HtmlTemplate(PostNotebookTemplate { posted: true }),
        Err(_) => HtmlTemplate(PostNotebookTemplate { posted: false }),
    }
}

#[derive(Template)]
#[template(path = "staticCellDetail.html")]
pub struct StaticCellDetailTemplate {
    markdown: String,
    timestamp: u64,
    author: String,
    event_id: String,
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
#[template(path = "staticCellList.html")]
pub struct StaticCellListTemplate {
    notebook_cells: Vec<StaticCellResponse>,
}

pub async fn find_static_cells() -> impl IntoResponse {
    info!("Client wants to get static cells");
    match NotebookCells::find_static_cells("wss://relay.roadrunner.lat").await {
        Ok(cells) => {
            let notebook_cells: Vec<StaticCellResponse> = cells
                .iter()
                .map(|cell| {
                    let markdown = cell.get_content().to_string();
                    let timestamp = cell.get_created_at();
                    let author = cell.get_pubkey().to_string();
                    let event_id = cell.get_id().to_string();
                    StaticCellResponse {
                        markdown,
                        timestamp,
                        author,
                        event_id,
                    }
                })
                .collect::<Vec<StaticCellResponse>>();
            HtmlTemplate(StaticCellListTemplate { notebook_cells })
        }
        Err(_) => HtmlTemplate(StaticCellListTemplate {
            notebook_cells: vec![],
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
