use anyhow::Context;
use axum::{routing, Router};
use tower_http::services::ServeDir;
use tracing::info;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

use utils::html::{
    code_execution,
    creator,
    editor,
    homepage,
    reader,
    post_static_cell,
    find_static_cell_detail,
    post_notebook_index,
    notebook_from_pubkey,
    get_user_keypair,
    notebook_cells_from_pubkey,
    check_user_keypair,
    home, profile
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::layer())
        .with(
            tracing_subscriber::filter::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "info".into()),
        )
        .init();
    info!("Starting Arrakis Server...");

    // need rout of src dir to serve utlity classes
    // includes monaco editor and styles
    let src_path = std::env::current_dir().unwrap();

    let pages_router = Router::new()
        .route("/home", routing::get(home))
        .route("/reader", routing::get(reader))
        .route("/profile", routing::get(profile))
        .route("/creator", routing::get(creator))
        .route("/editor", routing::get(editor))
        .route("/hosting", routing::get(homepage));

    let user_router = Router::new()
        .route("/newUserKeys", routing::get(get_user_keypair))
        .route("/userKeys", routing::post(check_user_keypair));

    let api_router = Router::new()
        .route("/notebook", routing::get(notebook_from_pubkey))
        .route("/notebookCells", routing::get(notebook_cells_from_pubkey))
        .route("/notebookIndex", routing::post(post_notebook_index))
        .route("/execute", routing::post(code_execution))
        .route("/postNotebookCell", routing::post(post_static_cell))
        .route("/find-static-cell", routing::post(find_static_cell_detail));

    let port = 6900_u16;
    let addr = std::net::SocketAddr::from(([0, 0, 0, 0], port));
    // info!("Assets path: {:?}", assets_path.to_str().unwrap());
    let router = Router::new()
        .route("/", routing::get(homepage))
        .nest("/nav", pages_router)
        .nest("/user", user_router)
        .nest("/relay", api_router)
        .route("/about", routing::get(homepage))
        .nest_service(
            "/styles",
            ServeDir::new(format!("{}/src/utils/styles", src_path.to_str().unwrap())),
        )
        .nest_service(
            "/monaco-editor",
            ServeDir::new(format!(
                "{}/src/utils/monaco-editor",
                src_path.to_str().unwrap()
            )),
        );

    info!("Arrakis service running on {}", addr);
    axum::Server::bind(&addr)
        .serve(router.into_make_service())
        .await
        .context("Waiting...")
        .expect("Server failed");

    Ok(())
}
