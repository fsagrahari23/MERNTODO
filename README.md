

# MERN Todo App with Redux Toolkit

A full-stack Todo application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack and state management using Redux Toolkit. This project showcases how to manage tasks efficiently with features like task creation, deletion, and state persistence.

## Features

- **Add Tasks**: Create and store tasks in MongoDB via the backend API.
- **Edit Tasks**: Modify existing tasks.
- **Delete Tasks**: Remove tasks from the list.
- **Mark Complete**: Mark tasks as completed or incomplete.
- **Filter Tasks**: Filter tasks based on their status.
- **Redux Toolkit**: Centralized state management with Redux Toolkit for efficient state handling.
- **Persisted State**: Task data persists even after a page refresh using Redux Toolkit and API calls.

## Tech Stack

- **Frontend**:

  - React.js
  - Redux Toolkit
  - Tailwind CSS (for styling)
  - Axios (for API calls)

- **Backend**:

  - Node.js
  - Express.js

- **Database**:
  - MongoDB (via Mongoose)

## Project Structure

\`\`\`
/client # React.js frontend
/src
/components # Reusable components (TaskItem, TaskForm, etc.)
/features # Redux slices (e.g., todosSlice.js)
/pages # Main app pages
/store # Redux store configuration
/server # Express.js backend
/controllers # Request handlers for task CRUD operations
/models # Mongoose models (Task.js)
/routes # API routes (taskRoutes.js)
/config # MongoDB connection configuration
\`\`\`

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Clone the repository

\`\`\`
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
\`\`\`

### Install dependencies

#### Backend

\`\`\`
cd server
npm install
\`\`\`

#### Frontend

\`\`\`
cd client
npm install
\`\`\`

### Configure environment variables

Create a \`.env\` file in the \`/server\` directory and add the following:
\`\`\`
MONGO_URI=your-mongodb-uri
PORT=3500
\`\`\`

### Run the application

#### Backend

\`\`\`
cd server
npm start
\`\`\`

#### Frontend

\`\`\`
cd client
npm start
\`\`\`

The application will be available at \`http://localhost:5173\`.

## API Endpoints

- \`GET /api/tasks\`: Fetch all tasks.
- \`POST /api/tasks\`: Add a new task.
- \`PUT /api/tasks/:id\`: Update an existing task.
- \`DELETE /api/tasks/:id\`: Delete a task.

## Future Enhancements

- Add user authentication for task management.
- Implement real-time updates using WebSockets.
- Add due dates and task prioritization.
- Implement notifications for overdue tasks.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/mern-todo-app/issues).

## License

This project is licensed under the MIT License.
