var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var db = require('./config.js');
var bodyParser = require('body-parser');
var User = require('./models/user.js')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/bundle.js', browserify(path.join(__dirname, '../client/components/index.js'), {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;


  var newUser = new User({
    username: username,
    password: password
  });

  newUser.save(function(err, newUser){
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(newUser)
    }
  });
});

app.post('/login', function(req, res) {
  console.log('LOGIN')
  var username = req.body.username;
  var password = req.body.password;


  var newUser = new User({
    username: username,
    password: password
  });

  newUser.save(function(err, newUser){
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(newUser)
    }
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
