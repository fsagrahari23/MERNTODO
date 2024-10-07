const express = require('express')
const app = express()
const TodoRoutes = require('./routes/TodoRouter');
const cors = require('cors')

const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3500;

// 66ffa9ed5f6308806341941e

// CORS configuration
app.use(cors({
  origin: 'https://mern-todo-4brt97viy-fsagrahari23s-projects.vercel.app/',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization','Cache-Control'],
}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/todo',TodoRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

