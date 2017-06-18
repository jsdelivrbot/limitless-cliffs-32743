// app.js
var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var CarController = require('./car/CarController');
app.use('/users', UserController);
app.use('/cars', CarController);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

module.exports = app;
