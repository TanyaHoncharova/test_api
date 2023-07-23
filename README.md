# **Simple Users API**

## **Description** 
This project is a RESTful API that allows users to manage a user database. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on user data. The application is built using Node.js, Express.js, and a MySQL database.

## API Description
## API Endpoints:

### GET /api/users: *Fetch all users from the database.*

Response: JSON array of user objects.

GET /api/users/*:id* : *Fetch a specific user by ID*.

Request parameter: id (string) - The unique identifier of the user.
Response: JSON object representing the user with the specified ID.

### POST /api/users : *Create a new user with the provided data.*

Request body: JSON object containing the user data (name, email, age).
Response: JSON object representing the newly created user.

### PUT /api/users/*:id* : *Update an existing user by ID with the provided data.*

Request parameter: id (string) - The unique identifier of the user to be updated.
Request body: JSON object containing the updated user data (name, email, age).
Response: JSON object representing the updated user.

### DELETE /api/users/*:id* : *Delete a user by ID.*

Request parameter: id (string) - The unique identifier of the user to be deleted.
Response: JSON object with a success message indicating the user was deleted successfully.

## Setup and Installation

Clone the repository to your local machine.
Install Node.js and npm if you haven't already.
Run npm install to install project dependencies.

## Running the Project
Set up your MySQL database and update the database configuration in src/db.js.
Create a .env file in the root directory of the project.
Add the following environment variables to the .env file:
makefile
### Copy code
DB_HOST=your_database_host

DB_USER=your_database_username

DB_PASSWORD=your_database_password

DB_DATABASE=your_database_name

Run the database migrations using npm run migrate.
Start the application with npm start.
The API will be available at http://localhost:3000/api/users.

## Running Tests
Ensure you have set up the database for testing and update the test database configuration in src/db.js.
Create a separate .env.test file for testing purposes and add the necessary environment variables.
Run the test suite using npm test.
Automated tests will be executed, and results will be displayed.

## Environment Variables
DB_HOST: The hostname or IP address of the MySQL database.

DB_USER: The username for connecting to the MySQL database.

DB_PASSWORD: The password for connecting to the MySQL database.

DB_DATABASE: The name of the MySQL database.
