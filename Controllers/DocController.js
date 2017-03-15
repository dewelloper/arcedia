var express = require('express');
var router = express.Router();
var db = require('../Dal/MongoDbProvider');



//router.get('/', function (req, res) {
//    db.open(function (err, db) {
//        db.collection('arcedia', function (err, collection) {
//            collection.find().toArray(function (err, items) {
//                console.log(items);
//                res.send(items);
//            });
//        });
//    });
//});



module.exports = router;