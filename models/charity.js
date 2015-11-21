var mongoose = require('mongoose')

var charitySchema = new mongoose.Schema({
  name: String,
  total: Number,
  donations: { type: mongoose.Schema.ObjectId, ref: 'Donation' }
  })

var Charity = mongoose.model('Charity', charitySchema)

module.exports = Charity