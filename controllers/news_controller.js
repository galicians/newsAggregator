var request = require('request');
var fs = require('fs');
var Writable = require('stream').Writable;
var Promise = require('Bluebird');

exports.getAllFeeds = function(source){
    return new Promise(function(resolve, reject) {
        request.get(source).on('response', function(dataFeeds){
            var response = {}
            response.statusCode = dataFeeds.statusCode
            resolve(response)
        }).on('end', function() {
            console.log('Data from ', source , ' has been transferred.')
        })
    }).catch(function(err) {
            console.log('Logs: Error in getAllFeeds: ', err)
    })
};







exports.feedsToJson = function(data) {
    //return data in jsonformat
};


exports.newsToMongo = function(dataJson){
    // return 200, 500, ...
};


