var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  dob: Number,
  challenge: String
  })

var User  = mongoose.model('User', userSchema)

module.exports = User