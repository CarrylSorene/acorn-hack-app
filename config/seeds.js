var mongoose = require('mongoose');
var async = require('async')

var User = require('../models/user');
var Video = require('../models/video');
var Challenge = require('../models/challenge');
var Donation = require('../models/donation');
var Charity = require('../models/charity');

// Drop all data that already exists? is this a good idea?
mongoose.connect('mongodb://localhost/challenge-app', function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase();
    console.log("dropped db")

    var user1 = new User ({
      name: "Lewis",
      dob: "2000-10-10",
      challenge: "Ice Bucket"
    });


    var challenge1 = new Challenge ({
      title: "Cinnamon Challenge",
      user: user1,
      category: "Cinnamon"
    });

    var video1 = new Video ({
      title: "CINNAMON CHALLENGE vs PORKY PARRY",
      videoId: "87Cwaf8pyN4",
      user: user1,
      challenge: challenge1
    });

    var charity1 = new Charity ({
      name: "British Heart Foundation",
      total: 1000
    });


    var donation1 = new Donation ({
      user: user1,
      amount: 50,
      charity: charity1,
      challenge: challenge1
    });

    async.parallel([
      challenge1.save,
      video1.save,
      charity1.save,
      donation1.save,
      user1.save,
    ], function(err, data) {
      if(err) console.log(err)

      console.log(data)
      mongoose.disconnect();
    })
});





