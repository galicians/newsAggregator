var request = require('request');
var fs = require('fs');
var concat = require('concat-stream');
var Promise = require('Bluebird');
var Stream = require('stream').stream;



exports.getAllFeeds = function(source){
    var response = {};
    return new Promise(function(resolve, reject) {
        request.get(source).on('response', function(dataFeeds){
            response.statusCode = dataFeeds.statusCode;
            resolve(response);
        }).on('end', function() {
            console.log('Logs: Data from ', source , ' has been transferred.');
        }).on('data', function(chunk) {
            response.body += chunk
        })
    }).catch(function(err) {
            console.log('Logs: Error in getAllFeeds: ', err);
    });
};







exports.feedsToJson = function(data) {
    //return data in jsonformat
};


exports.newsToMongo = function(dataJson){
    // return 200, 500, ...
};


