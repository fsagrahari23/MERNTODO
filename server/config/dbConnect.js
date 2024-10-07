const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
// dotenv
const dbConnect =()=>{ mongoose
  .connect(`mongodb://localhost:27017/MernTodoDeploy`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message)
  })
}


module.exports = dbConnect;
