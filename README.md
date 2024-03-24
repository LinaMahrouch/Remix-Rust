# Remix-Rust

This is a basic example of a full-stack application with a Remix frontend, Rust backend, and Docker for containerization, highlighting a simple integration of these thechnologies. 

**Note:** Currently in development. More features coming soon.


## Getting Started

These instructions will get you running the project on your local machine for development 

### Prerequisites

- Rust and Cargo (https://www.rust-lang.org/tools/install)
- Node.js and npm (https://nodejs.org/)
- Docker (https://www.docker.com/get-started)

### Running the Application Locally

1. **Clone the Repository**

```bash
git clone https://github.com/LinaMahrouch/Remix-Rust.git
cd remix-rust-app
```


2. **Build and Run the Docker Container**
```bash
docker build -t remix-rust-app .
docker run -p 8080:8080 remix-rust-app
```
The application will be accessible at http://localhost:8080.



