const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  time: {
    type: String, // Store time as a string
    required: true,
    match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ // Regular expression to validate 'HH:mm' format
  },
  completed: {
    type: Boolean,
    default: false
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Todo', TodoSchema)