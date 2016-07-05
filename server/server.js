var express = require('express');
var path = require('path');

var app = express();

//app.set('view engine', 'html');

app.use(express.static(__dirname + '/../client'));

module.exports = app;