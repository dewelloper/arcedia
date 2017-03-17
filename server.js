var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");



var app = express();

//config
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.set("model", path.join(__dirname, "Dal"));

//midleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "bower_components")));
app.use(express.static(__dirname + '../public'));



//define routes
app.use(require('./Controllers/ArticleController'));



//start the server
//var port = process.env.port || 1337;
//app.listen(port, function (req, res) {
//    console.log('listening ' + port);
//});

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function (req, res) {
    console.log('Listening on port %d', server_port);
});