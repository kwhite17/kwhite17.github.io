var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
var resourcePath = '.';

app.get('/', function(req, res) {
  res.sendFile('pages/home.html', {root: resourcePath});
});

app.get('/home', function(req, res) {
  res.redirect('/');
});

app.get('/projects', function(req, res) {
  res.sendFile('pages/projects.html', {root: resourcePath});
});

app.get('/travel', function(req, res) {
  res.sendFile('pages/travel.html', {root: resourcePath});
});

app.get('/passions', function(req, res) {
  res.sendFile('pages/passions.html', {root: resourcePath});
});

app.get('/blogs', function(req, res) {
  res.sendFile('pages/blogs.html', {root: resourcePath});
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
