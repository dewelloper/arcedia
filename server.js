var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");


var app = express();

//config
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.set("model", path.join(__dirname, "Dal"));

//midleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "bower_components")));

//define routes

app.use(require('./Controllers/MapController'));


//start the server
var port = process.env.port || 1337;
app.listen(port, function (req, res) {
    console.log('listening ' + port);
});