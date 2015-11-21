var express     = require('express')
var app         = express()
var port        = process.env.PORT || 3000
var path        = require('path')
var cors        = require('cors')
var bodyParser  = require('body-parser')
var logger      = require('morgan')
var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/challenge-app')

var User = require('./models/user')
var Video = require('./models/video')
var Challenge = require('./models/challenge')
var Donation = require('./models/donation')



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

//INDEX
app.get('/', function(req, res) {
  console.log('hitting root route')
  res.render('index')
})

app.get('/', function(req, res) {
  res.render('pages')
})

app.get('/pagethree', function(req, res) {
  res.render('pages')
})

app.use(cors());
app.use(logger('dev'));

app.listen(port, function() {
  console.log('started server on port', port)
});