var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
var jsonServer = require('json-server');

var router = jsonServer.router('db.json');
var server = jsonServer.create();
server.use(router)
server.listen(3000)

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(process.env.PORT || 3000);
