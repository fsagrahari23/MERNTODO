const express = require('express');
// Take route from express
const router = express.Router();

// Import the necessary controller functions
const { addTodo, fetchTodos, editTodo, deleteTodo } = require('../controllers/TodoController');

// Routes
// Fetch all todos
router.get('/', fetchTodos);

// Add a new todo
router.post('/add', addTodo);

// Edit a specific todo by ID
router.put('/edit/:id', editTodo);

// Delete a specific todo by ID
router.delete('/delete/:id', deleteTodo);

module.exports = router;
