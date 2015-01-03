var request = require('request');
var fs = require('fs');
var Promise = require('Bluebird');
var mongoose = require('mongoose');
var Story = require('../models/story');
var config = require('../config');

exports.getAllFeeds = function(source){

    var response = {};
    return new Promise(function(resolve, reject) {
        request.get(source).on('response', function(dataFeeds){
            response.statusCode = dataFeeds.statusCode;
            response.source = source;
            resolve(response);
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
    var source;
      return new Promise(function(resolve, reject) {
        data.body.split('<item>').forEach( function(element,index) {
            if(index === 0) {
                source = data.source.substring( data.source.indexOf('http://feeds.') + 'http://feeds.'.length, data.source.indexOf('.co') );
                return true;
            }
            story = {};
            story.source = source;
            story.title = element.substring( element.indexOf('<title>') + '<title>'.length, element.indexOf('</title>') );
            story.description = element.substring(element.indexOf('<description>') + '<description>'.length, element.indexOf('</description>') );
            story.link = element.substring(element.indexOf("<link>") + "<link>".length, element.indexOf("</link>") );
            story.pubDate = element.substring(element.indexOf("<pubDate>") + "<pubDate>".length, element.indexOf("</pubDate>") );
            news.push(story);
            resolve(news);
        });

    }).catch(function(err) {
        console.log('Logs: Error in feedsToJson: ', err);
    });           
};

exports.newsToMongo = function(dataJson) {

    var storyDocument;
    return new Promise( function(resolve, reject) {
        dataJson.forEach(function(story) {
            storyDocument = new Story({
                source: story.source,
                title: story.title,
                description: story.description,
                link: story.link,
                pubDate: story.pubDate
            });
            storyDocument.save(function(err) {
                if (err) {
                console.log(err);
                } else{
                    // console.log('new document saved')
                } 
            });
            resolve('all documents saved in DB');
        });
    }).catch(function(err) {
        console.log('Logs: Error in newsToMongo: ', err);
     });
};

exports.getNews = function(req, res) {

            Story.find({},{title: 1, source: 1}, function(err, data) {
            if(err){
                res.send(500);
            } else {
                res.send(200, data);
            }
    });
    
};

