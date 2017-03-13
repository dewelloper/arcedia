var express = require('express');
var router = express.Router();
//var connProvider = require('../Dal/MsSqlProvider');
//var GoogleMapsAPI = require('googlemaps');


var publicConfig = {
    key: 'AIzaSyD9I-2EPgPI_DikhQrvqWYPzzR2mUoDVyU',
    stagger_time: 1000, // for elevationPath
    encode_polylines: false,
    secure: true, // use https
    //proxy: 'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};

