var mongoose = require('mongoose')

var videoSchema = new mongoose.Schema({
  title: {type: String, required: true},
  videoId: {type: String, required: true},
  user: {type: String, required: true},
  category: String,
  challenge: {type: mongoose.Schema.ObjectId, ref: 'Challenge'}
  })

var Video = mongoose.model('Video', videoSchema)

module.exports = Video