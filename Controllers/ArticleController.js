var express = require('express');
var router = express.Router();
var databaseUrl = 'mongodb://localhost:27017/arcedia';
var mongojs = require('mongojs');
var db = mongojs(databaseUrl);
var arts = db.collection('articles');
var promise = require('promise');
var q = require('q');



router.get('*', function (req, res) {
    var articles = [];
    articles.push({ "id": 1, "name": "json" });
    res.render('../Views/index.ejs', { artcls: articles }); 

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

router.get('/about', function (req, res) {
    res.render('about', { title: 'Hey', message: 'Hello there!' })
});

router.get('/insertarticle', function (req, res) {
    res.render('insertarticle', { title: 'Hey', message: 'Hello there!' })
});


router.post('/InsertArticle', function (request, response) {
    var a = new arts({
        name: request.body.name
    });

    a.save(function (err) {
        if (err)
            throw err;
        else
            console.log('save article successfully...');
    });
});


module.exports = router;