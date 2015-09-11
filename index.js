var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
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

var server = app.listen(port, function() {
  var host = server.address().address;
  var finalPort = server.address().port;

  console.log('katanakdubs listening at http://%s:%s', host, finalPort);
});
