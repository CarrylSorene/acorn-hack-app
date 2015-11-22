var mongoose = require('mongoose')

var videoSchema = new mongoose.Schema({
  videoTitle: {type: String, required: true},
  videoDescription: {type: String, required: true},
  videoId: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  challenge: {type: mongoose.Schema.ObjectId, ref: 'Challenge'}
  })

var Video = mongoose.model('Video', videoSchema)

module.exports = Video