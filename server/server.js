var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var path = require('path');

app.get('/bundle.js', browserify(path.join(__dirname, '../client/index.js'), {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, '../client')));

app.get('/app.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
