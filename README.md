# DevTrace

DevTrace is a simple debugging knowledge base built with the MERN stack.

It helps developers save coding problems they have faced, record how they solved them, and keep track of problems that happen more than once.

## Features

- Add debugging issues
- Save the problem and solution
- Add the related technology
- Mark issues as solved or unsolved
- Track how many times an issue has happened
- Delete issues
- Store data permanently with MongoDB
- Responsive dark interface

## Tech Stack

### Frontend

- React
- Vite
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/issues` | Get all issues |
| POST | `/api/issues` | Create a new issue |
| PATCH | `/api/issues/:id` | Update an issue |
| DELETE | `/api/issues/:id` | Delete an issue |

## Project Structure

    devtrace/
    ├── backend/
    │   ├── models/
    │   │   └── Issue.js
    │   ├── .env
    │   ├── package.json
    │   └── server.js
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── IssueCard.jsx
    │   │   │   ├── IssueForm.jsx
    │   │   │   └── IssueList.jsx
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   └── main.jsx
    │   └── package.json
    │
    ├── .gitignore
    └── README.md

## Running the Project Locally

### 1. Clone the repository

    git clone https://github.com/nischlkunwr617/devtrace.git
    cd devtrace

### 2. Set up the backend

    cd backend
    npm install

Create a `.env` file inside the `backend` folder and add:

    MONGO_URI=your_mongodb_connection_string

Start the backend:

    npm run dev

The backend runs on:

    http://localhost:5000

### 3. Set up the frontend

Open another terminal and run:

    cd frontend
    npm install
    npm run dev

Open the Vite URL shown in the terminal.

## What I Learned

While building DevTrace, I practiced:

- Setting up a Node.js and Express backend
- Creating REST API endpoints
- Connecting an application to MongoDB Atlas
- Creating MongoDB models with Mongoose
- Performing CRUD operations
- Building reusable React components
- Passing data using props
- Managing React state with `useState`
- Fetching data with `useEffect`
- Sending POST, PATCH, and DELETE requests from React
- Connecting a React frontend to an Express backend
- Creating a responsive interface with CSS
- Using Git and GitHub during development

## Future Improvements

Some features I may add in the future:

- Search issues
- Filter issues by technology
- Edit issue details
- Sort issues
- User accounts and authentication
- Better error messages
- Loading states

## Author

Nischal Kunwar