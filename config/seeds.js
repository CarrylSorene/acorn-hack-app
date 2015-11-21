var mongoose = require('mongoose');

var User = require('./models/user');
var Video = require('./models/video');
var Challenge = require('./models/challenge');
var Donation = require('./models/donation');
var Charity = require('./models/charity');

mongoose.connect('mongodb://localhost/challenge-app')

var video1 = new Video ({
  title: "CINNAMON CHALLENGE vs PORKY PARRY",
  videoId: "87Cwaf8pyN4",
  user: "Lewis"
});

var challenge1 = new Challenge ({
  user: "Lewis",
  category: "Cinnamon"
});

var charity1 = new Charity ({
  name: "British Heart Foundation",
  total: 1000
});

var donation1 = new Donation ({
  user: "Lewis",
  amount: 50
});

var user1 = new User ({
  name: "Lewis" 
});

video1.save(function(err, video){
  if(err) console.log(err)
    console.log('video1 saved', video)
})

challenge1.save(function(err, challenge){
  if(err) console.log(err)
    console.log('challenge1 saved', challenge)
})

charity1.save(function(err, charity){
  if(err) console.log(err)
    console.log('charity1 saved', charity)
})

donation1.save(function(err, donation){
  if(err) console.log(err)
    console.log('donation1 saved', donation)
})

user1.save(function(err, user){
  if(err) console.log(err)
    console.log('user1 saved', user)
})