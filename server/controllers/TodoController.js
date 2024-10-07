const Todo = require('../models/TodoModel')


const addTodo = async (req, res) => {
 
  try{
    const { title, description , time } = req.body
    
    if(!title || !description || !time){
      res.status(400).json({
        message: 'All fields are required'
       });
    }
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  if (!timeRegex.test(time)) {
    return res.status(400).json({ error: 'Invalid time format. Expected HH:mm' });
  }

    const todo = new Todo({
      title,
      description,
      time,
      completed: false
    })

    await todo.save()
    res.status(200).json({ 
      data:todo,
      success: true,
      message: 'Todo added successfully'
     });
  }catch(err){
    console.log(err)
    res.status(500).json({
      message: 'Internal server error'
     });
  }
  
}
const editTodo = async (req, res) => {
  
  try{
    

    const { title, description , time } = req.body
    if(!title || !description || !time){
      res.status(400).json({
        message: 'All fields are required'
       });
    }
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!timeRegex.test(time)) {
      return res.status(400).json({ error: 'Invalid time format. Expected HH:mm' });
    }
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, {
      title,
      description,
      time
    });

    if(!todo){
      res.status(404).json({
        message: 'Todo not found'
       });
    }
    
    
    // await todo.save();
    res.status(200).json({ 
      data:todo,
      success: true,
      message: 'Todo edited successfully'
     });
  }catch(err){
    res.status(500).json({
      message: 'Internal server error'
     });
  }
  
}

const deleteTodo = async (req, res) => {
  try{
    
     const todo = await Todo.findByIdAndDelete({_id:req.params.id});

    // await todo.save();
    
    res.status(200).json({ 
      data:todo,
      success: true,
      message: 'Todo deleted successfully'
     });
  }catch(err){
    res.status(500).json({
      message: 'Internal server error'
     });
  }
  
}

const fetchTodos = async (req, res) => {
  try{
    const todos = await Todo.find();
    res.status(200).json({ 
      todos,
      success: true,
      message: 'Todos fetched successfully'
     });
  }catch(err){
    res.status(500).json({
      message: 'Internal server error'
     });
  }
  
}
module.exports = {addTodo, editTodo, deleteTodo, fetchTodos}