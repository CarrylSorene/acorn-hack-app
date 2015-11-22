var mongoose = require('mongoose')

var challengeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  category: String
  })

var Challenge = mongoose.model('Challenge', challengeSchema)

module.exports = Challenge