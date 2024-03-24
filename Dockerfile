# Use the official Rust Docker image as a base for building the backend
FROM rust:latest as build-backend

WORKDIR /app/backend

# Copy the backend code into the container
COPY backend .

# Build the Rust project
RUN cargo build --release

# Use the official Node image for building the frontend
FROM node:latest as build-frontend

WORKDIR /app/frontend

# Copy the frontend code into the container
COPY frontend .

# Install dependencies and build the frontend
RUN npm install
RUN npm run build

# Combine the backend and frontend into a single image
FROM rust:latest

WORKDIR /app

# Copy the built backend binary 
COPY --from=build-backend /app/backend/target/release/backend .

# Copy the built frontend assets
COPY --from=build-frontend /app/frontend/build/client /app/public

# Expose the port on which the backend will run
EXPOSE 8080

# Start the backend server
CMD ["./backend"]
