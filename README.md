# Simple To-Do List Application

This is a simple to-do list application built using Node.js, Express.js, and MongoDB. Users can add, edit, delete, and mark tasks as completed. The tasks are stored in a MongoDB database, ensuring they persist between application restarts.

## Features

- Add new tasks to the to-do list.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Tasks persist between application restarts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

### Clone this repository:

   git clone https://github.com/your-username/todo-list-app.git

### Navigate to the project directory:
    cd todo-list-app

## Install dependencies:
    npm install

## Configuration
### MongoDB Setup:

Make sure you have MongoDB installed and running on your machine.

Create a MongoDB database for the application.

Update the MongoDB connection string in app.js to point to your database:
    
    mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

## Usage
### Start the application:
    npm start

Open your web browser and go to http://localhost:3000 to use the to-do list application.

You can add, edit, complete, and delete tasks as needed.
