use actix_cors::Cors;
use actix_files as fs;
use actix_web::{web, App, HttpServer, HttpResponse, Responder};

async fn get_data() -> impl Responder {
    HttpResponse::Ok().json("Hello from Rust!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .max_age(3600);

        App::new()
            .wrap(cors)
            .route("/api/data", web::get().to(get_data))
            .service(fs::Files::new("/", "./public").index_file("index.html"))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
