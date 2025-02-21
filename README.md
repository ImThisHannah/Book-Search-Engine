# Book Search Engine
This project demonstrates the power of modern web development by focusing on data-driven applications. In today’s world, websites are heavily dependent on data and user preferences, with personalized experiences being the cornerstone of most real-world applications. This project showcases how to build a scalable book search engine that can evolve as user needs change.

## About the Project
This project is a book search engine that initially integrates with the Google Books API using a RESTful API. The task was to refactor it into a more modern, efficient, and flexible GraphQL API using Apollo Server. It follows the MERN stack (MongoDB, Express, React, Node.js) architecture, with:

- React for the front-end
- MongoDB for the database
- Express.js for the backend API
- Apollo Server to handle the GraphQL API
- The app allows users to search for books, view their details, and save their favorite books for later reference, all backed by a MongoDB database deployed on MongoDB Atlas. The app is ready to be deployed on Render.

## User Story
md
Copy
AS an avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
## Features
- Google Books API integration: Search and view book details from the Google Books API.
- GraphQL API: The RESTful API has been refactored to use GraphQL with Apollo Server for more flexible queries and mutations.
- User Authentication: Users can create accounts and save their book searches to the backend.
- MongoDB Database: Books are saved in a MongoDB database, providing persistent storage for the user’s book list.
- React Frontend: The frontend is built using React, with state management to interact with the GraphQL API.
- Deployment on Render: The app is set up for deployment with MongoDB Atlas for data storage.

## Getting Started
To get started with this project, follow these steps:

- Prerequisites
Make sure you have the following installed:

Node.js (for the backend)
MongoDB Atlas account (for the database)
Render account (for deployment)
You’ll also need to install the necessary type definitions for TypeScript if you’re working with it:

bash
Copy
`npm install --save-dev @types/node`
Setting up the Apollo Server
Set up Apollo Server:

Refactor the existing RESTful API to use GraphQL queries and mutations.
Apollo Server will handle your GraphQL endpoints, allowing you to query and mutate the data.
Authentication Middleware:

Modify the existing authentication middleware so that it works with the new GraphQL API. This ensures that only authenticated users can save or retrieve their saved books.
Apollo Client Setup:

Set up the Apollo Client on the front-end to enable communication between the React app and the GraphQL server.
- MongoDB Atlas Configuration:

- Set up a MongoDB Atlas database to store user data and saved book information.
- Ensure your connection string is securely added to your environment variables for both local development and deployment.

## Deploying the Application:

Deploy the application to Render, ensuring that the MongoDB Atlas connection string is properly configured in your Render service settings.
Running the App Locally

## Clone the repository:

bash
Copy
`git clone <repository_url>`
`cd <project_directory>`

## Install dependencies for both the frontend and backend:

bash
Copy
`npm install` or `npm i`

## Set up environment variables for your MongoDB Atlas connection and any other sensitive keys:

Create a .env file in the root of the project with the following:
plaintext
Copy
MONGODB_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
Start the backend server (Apollo Server):

bash
Copy
`npm run server`
Start the frontend React app:

bash
Copy
`npm run client`
Visit http://localhost:3000 to view the app.

## Deployment
- MongoDB Atlas:

Set up your MongoDB Atlas cluster and obtain your connection string.
Add this connection string as an environment variable (MONGODB_URI) in your Render dashboard.
Render:

Deploy the app to Render by linking your repository to Render.
Add environment variables for the MongoDB URI and any other necessary keys.
Deploy:

Once the app is deployed on Render, you can access it online and begin searching and saving books!

## Technologies Used
- MongoDB (Database)
- Express.js (Backend framework)
- React (Frontend framework)
- Node.js (Runtime environment)
- Apollo Server (GraphQL API)
- GraphQL (API query language)
- Render (App deployment)
- MongoDB Atlas (Database hosting)
