// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
//MongoClient.connect("mongodb://localhost:27017/arcediadb", function (err, db) {
//    if (!err) {
//        console.log("We are connected");
//    }
//});

var URL = "mongodb://localhost:27017/arcediadb";

MongoClient.connect(URL, function (err, db) {
    if (err) return
    var results = [];
    var collection = db.collection('articles');
    var cursor = collection.find();
    console.log(cursor);
    cursor.forEach(function (doc) {
        results.push(doc);
        console.log(doc);
    });
    console.log("end");
})