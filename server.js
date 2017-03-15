var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");


var app = express();

//config
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.set("model", path.join(__dirname, "Dal"));

//midleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "bower_components")));


//define routes

app.use(require('./Controllers/DocController'));

app.get('/', function (req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('index', {
        drinks: drinks,
        tagline: tagline
    });
});

app.get('/about', function (req, res) {
    res.render('about', { title: 'Hey', message: 'Hello there!' })
});


//start the server
var port = process.env.port || 1337;
app.listen(port, function (req, res) {
    console.log('listening ' + port);
});