var request = require('request');
var fs = require('fs');
var Writable = require('stream').Writable;
var Promise = require('Bluebird');

exports.getAllFeeds = function(source){
    return new Promise(function(resolve, reject) {
        request.get(source).on('error', function(err) {
            console.log('The following error has ocurred', err)
            reject('error')
        }).on('response', function(dataFeeds){
            var response = {}
            response.statusCode = dataFeeds.statusCode
            resolve(response)
        }).on('end', function() {
            console.log('No more to data to consume from: ', source)
        })
    });
};







exports.feedsToJson = function(data) {
    //return data in jsonformat
};


exports.newsToMongo = function(dataJson){
    // return 200, 500, ...
};


