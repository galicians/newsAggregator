var should = require("should");
var controller = require("../../controllers/news_controller");
var testServer = require(".././test_server/server");
var serverAPI = require(".././test_server/server_helpers");
var Story = require('../../models/story');
var config = require('../../config');

describe("The news controller", function() {

    var source;

    before(function(){
        source = serverAPI.startServer(testServer);
    });

    after(function(){
        serverAPI.stopServer();
    });

    describe("getting the feeds from the source", function() {

        it("should return 200 status code when connection is successful", function(done) {
            controller.getAllFeeds(source).then( function(data) {
                data.statusCode.should.equal(200);
                done();
            }).catch(function(err){
                done(err);
            });
        });

        it("error is managed, and exception throw when the connection fails", function() {
            controller.getAllFeeds('brokenSource').then( function(data) {
            }).catch(function(err){
                err.should.not.equal(undefined);
            });
        });

        it("retrieves the data from the source", function(done) {
             controller.getAllFeeds(source).then( function(data) {
                data.body.indexOf('<title>BBC News - Home</title>').should.not.equal(-1);
                done();
            }).catch(function(err){
                done(err);
            });
        });

        it("transforms data feeds into and array of json objects", function(done) {
            controller.getAllFeeds(source).then( function(feedsNews) {
                controller.feedsToJson(feedsNews).then( function(jsonNews) {
                    jsonNews.length.should.equal(84);
                });
                done();
            }).catch(function(err){
                done(err);
            });
        });

        it("all json objects have a title, source, description, link and pubDate", function(done) {
            controller.getAllFeeds(source).then( function(feedsNews) {
                controller.feedsToJson(feedsNews).then( function(jsonNews) {
                    jsonNews.forEach( function(jsonObject) {
                        jsonObject.source.should.not.equal(undefined);
                        jsonObject.title.should.not.equal(undefined);
                        jsonObject.description.should.not.equal(undefined);
                        jsonObject.link.should.not.equal(undefined);
                        jsonObject.pubDate.should.not.equal(undefined);
                    });
                });
                done();
            }).catch(function(err){
                done(err);
            });
        });

    });

    describe("when saving the news into the database", function() {
        var story;

        beforeEach(function() {
            Story.prototype.save = function(callback) {
                if(callback) callback();
            };
            story = new Story({
            source: 'Sky News',
            title : 'Boxing Day Snow As UK Slides Towards -15C',
            description : 'Severe weather alerts are issued for Boxing Day ...',
            pubDate : 'Tue Dec 30 2014 11:56:50',
            link : 'https://github.com/galicians'   
            });
        });

        it("saves all the objects in the database", function(done) {
            controller.getAllFeeds(source).then( function(feedsNews) {
                controller.feedsToJson(feedsNews).then( function(jsonNews) {
                    controller.newsToMongo(jsonNews).then( function(msg) {
                        msg.should.equal('all documents saved in DB');
                        story.save(function() {
                            story.total.should.equal(jsonNews.length + 1);
                        });
                    });
                }); 
                done();
            }).catch(function(err){
                done(err);
            });
        });

    });

    describe("when fetching the news from the database", function(){

        var req;
        var res;
        var statusCode;
        var news;

        beforeEach(function() {
            res = {
                send : function(code,data) {
                    statusCode = code,
                    sentData = data;
                }
            };
            Story.find = function(q,query,callback) {
                callback(null, { source: 'bbc', title: 'Node v 1.0 will be ready in 5 years' });
            };
        });

        it("should return 200", function() {
            controller.getNews(req, res);
            statusCode.should.equal(200);

        });
        it("should send back the data", function() {
            controller.getNews(req, res);
            sentData.source.should.equal('bbc');
            sentData.title.should.equal("Node v 1.0 will be ready in 5 years");
        });

        it("should return 500 when find errors", function() {
            Story.find = function(q,query,callback) {
                callback({err: 1}, null);
            };
            controller.getNews(req, res);
            statusCode.should.equal(500);
        });
    });

});