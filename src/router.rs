use tokio::process::Command;

use anyhow::Context;
use axum::{routing, Router};
use tower_http::services::ServeDir;
use tracing::info;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

use utils::{
    html::{code_execution, creator, editor, homepage, notebook, reader, post_static_cell, find_static_cells, find_static_cell_detail},
    nostr::listen_for_code_executions,
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

    // Microservice for static content
    let pages_router = Router::new()
        .route("/reader", routing::get(reader))
        .route("/creator", routing::get(creator))
        .route("/editor", routing::get(editor))
        .route("/hosting", routing::get(homepage));

    // Microservices to interact with relays
    let api_router = Router::new()
        .route("/notebook", routing::post(notebook))
        .route("/execute", routing::post(code_execution))
        .route("/post-static-cell", routing::post(post_static_cell))
        .route("/find-static-cell", routing::post(find_static_cell_detail))
        .route("/get-static-cells", routing::get(find_static_cells));

    let port = 6900_u16;
    let addr = std::net::SocketAddr::from(([0, 0, 0, 0], port));
    // info!("Assets path: {:?}", assets_path.to_str().unwrap());
    let router = Router::new()
        .route("/", routing::get(homepage))
        .nest("/nav", pages_router)
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
