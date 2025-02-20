# Product Management Backend

## Project Overview
This is a Node.js and TypeScript-based backend application that provides CRUD operations for the product module. The application is containerized using Docker and uses MySQL as its database.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Minimum Version 18)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/downloads)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/43pranay/product-management-backend.git
cd product-management-backend
```

## Docker Setup

### 1. Build the Docker Image
```sh
docker build -t product-management-backend .
```

### 2. Run the Docker Container
```sh
docker-compose up -d
```
Now, you can access the API at `http://localhost:3000/`.

## License
This project is licensed under the MIT License.

