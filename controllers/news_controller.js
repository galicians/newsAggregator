var request = require('request');
var fs = require('fs');
var concat = require('concat-stream');
var Promise = require('Bluebird');


exports.getAllFeeds = function(source){

    var response = {};
    return new Promise(function(resolve, reject) {
        request.get(source).on('response', function(dataFeeds){
            response.statusCode = dataFeeds.statusCode;
            response.source = source;
            resolve(response);
        }).on('end', function() {
            console.log('Logs: Data from ', source , ' has been transferred.');
        }).on('data', function(chunk) {
            response.body += chunk;
        });
    }).catch(function(err) {
            console.log('Logs: Error in getAllFeeds: ', err);
    });
};


exports.feedsToJson = function(data) {

    var news = [];
    var story = {};
      return new Promise(function(resolve, reject) {
        data.body.split('<item>').forEach( function(element,index) {
                story = {};
                story.source = data.source.substring( data.source.indexOf('http://feeds.') + 'http://feeds.'.length, data.source.indexOf('.co') );
                story.title = element.substring( element.indexOf('<title>') + '<title>'.length, element.indexOf('</title>') );
                story.description = element.substring(element.indexOf('<description>') + '<description>'.length, element.indexOf('</description>') );
                story.link = element.substring(element.indexOf("<link>") + "<link>".length, element.indexOf("#sa-ns_mchannel") );
                story.pubDate = element.substring(element.indexOf("<pubDate>") + "<pubDate>".length, element.indexOf("</pubDate>") );
                news.push(story)
                resolve(news)  
        });

    }).catch(function(err) {
        console.log('Logs: Error in feedsToJson:', err);
    });           
};

// exports.newsToMongo = function(dataJson){
//     // return 200, 500, ...
// };


