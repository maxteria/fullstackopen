const mongoose = require('mongoose')

// Connect to MongoDB
const url = process.env.MONGODB_URI
mongoose.connect(url)
  .then(result => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })


// Schema
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true
  },
  date: { 
    type: Date,
    required: true
  },
  important: Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Model
module.exports = mongoose.model('Note', noteSchema)