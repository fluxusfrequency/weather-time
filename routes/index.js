var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  http.get('http://api.openweathermap.org/data/2.5/weather?q=Boulder,co', function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      var resData = JSON.parse(body);
      console.log('resData', resData);
      res.render('index', { title: 'Boulder Weather', body: resData });
    });
  }).on('error', function(err) {
    console.log('ERROR: ' + err);
  });

});

module.exports = router;
