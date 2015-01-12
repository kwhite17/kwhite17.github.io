var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',{title: 'Software Engineer'});
});

router.get('/projects', function(req, res) {
  res.render('projects',{title: 'Projects'});
});

router.get('/sports', function(req, res) {
  res.render('sportsnotes',{title: 'Sports Commentary'});
});

router.get('/tech', function(req, res) {
  res.render('technotes',{title: 'Tech Analysis'});
});

router.get('/travel', function(req, res) {
  res.render('travel',{title: 'Travel'});
});

module.exports = router;
