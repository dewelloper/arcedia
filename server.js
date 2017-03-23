var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");


var app = express();

//config
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.set("model", path.join(__dirname, "Dal"));
process.env.PWD = process.cwd();

//midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, '.\partials')));
//app.use(express.static(path.join(__dirname, '.\node_modules\ejs\lib')));

app.use('/heatcanvas', express.static(process.env.PWD + '/partials'));
app.use('/heatcanvas', express.static(process.env.PWD + '/node_modules\ejs\lib'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, "bower_components")));
//app.use(express.static(__dirname + 'partials'));
//app.use(express.static(__dirname + 'node_modules/ejs/lib'));


//define routes
app.use(require('./Controllers/ArticleController'));



app.get('/', function (req, res) {
    var articles = [];
    articles.push({ "id": 1, "name": "json" });
    const index = path.join(__dirname, 'Views/index.ejs');
    res.render(index, { artcls: articles });

    //findAllArticles().then(function (nresult) {
    //    res.render('../Views/index.ejs', { artcls: articles[0] }); 
    //});

    //function findAllArticles() {
    //    var deferred = q.defer();
    //    arts.find(function (err, docs) {
    //        articles.push(docs);
    //        deferred.resolve(articles);
    //    });
    //    return deferred.promise;
    //}
});



var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function (req, res) {
    console.log('Listening on port %d', server_port);
});