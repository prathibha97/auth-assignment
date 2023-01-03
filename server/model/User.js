const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  picturePath: {
    type: String,
    default: '',
  },
}, { timestamps: true })

module.exports = User = mongoose.model('User', userSchema)