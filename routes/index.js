var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/sports', function(req, res) {
  res.render('sportsnotes');
});

router.get('/tech', function(req, res) {
  res.render('technotes');
});

router.get('/travel', function(req, res) {
  res.render('travel');
});

module.exports = router;
