(function() {
  'use strict';

var express = require('express');
var app     = express();
var port    = process.env.PORT || 5500;

// var router = new Router();

var router = function(req, res) {

  app.get('/time', function(req, res) {
    var date = new Date();
    var localTime = date.toLocaleTimeString();
    res.send({ time: localTime});
  });

  app.get('/:message', function(req, res) {
    res.send({msg: req.params.message});
  });

};
router();

app.listen(port);
console.log('Im listening! psst..to ' + port);//your code here

}());
