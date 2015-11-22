var express     = require('express')
var app         = express()
var port        = process.env.PORT || 3000
var path        = require('path')
var cors        = require('cors')
var bodyParser  = require('body-parser')
var logger      = require('morgan')
var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/challenge-app')

var User = require('./models/user');
var Video = require('./models/video');
var Challenge = require('./models/challenge');
var Donation = require('./models/donation');
var Charity = require('./models/charity');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get('/', function(req, res) {
  console.log('hitting root route')
  res.render('pages/index')
})

app.get('/video', function(req, res) {
  res.render('pages/video')
})

app.get('/donate', function(req, res) {
  res.render('pages/donate')
})

app.get('/challenges', function(req, res) {
  res.render('pages/challenges')
})

app.get('/friends', function(req, res) {
  res.render('pages/friends')
})

app.get('/profile', function(req, res) {
  User.find({name:"Lewis"}, function(err, _user) {    
    // console.log(_user)
    res.render('pages/profile', { user: _user })
  })
})

app.get('/statistics', function(req, res) {
  res.render('pages/statistics')
})

app.get('/upload', function(req, res) {
  res.render('pages/upload')
})

app.get('/adduser', function(req, res) {
  res.render('pages/adduser')
})

app.use(cors());
app.use(logger('dev'));

app.listen(port, function() {
  console.log('started server on port', port)
});