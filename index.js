var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static('public'));
var resourcePath = '.';

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: resourcePath
  });
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var finalPort = server.address().port;

  console.log('katanakdubs listening at http://%s:%s', host, finalPort);
});
