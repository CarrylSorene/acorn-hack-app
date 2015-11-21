var mongoose = require('mongoose')

var donationSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  challenge: {type: String, required: true},
  charity: {type: String, required: true},
  amount: Number
  })

var Donation = mongoose.model('Donation', donationSchema)

module.exports = Donation