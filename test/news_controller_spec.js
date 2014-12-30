var should = require("should");
var controller = require("../controllers/news_controller");
var testServer = require("./test_server/server");
var serverAPI = require("./test_server/server_helpers");
var Story = require('../models/story');


describe("news controller", function() {

    var source;

    before(function(){
        source = serverAPI.startServer(testServer);
    });

    after(function(){
        serverAPI.stopServer();
    });

    describe("when getting the feeds", function() {

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
                    jsonNews.length.should.equal(85);
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
                        jsonObject.source.should.not.equal(undefined)
                        jsonObject.title.should.not.equal(undefined)
                        jsonObject.description.should.not.equal(undefined)
                        jsonObject.link.should.not.equal(undefined)
                        jsonObject.pubDate.should.not.equal(undefined)
                    })
                });
                done();
            }).catch(function(err){
                done(err);
            });
        });


    });

    describe("when saving the news in the database", function() {
        var story;




    });

    describe("when fetching the news from the database", function(){
        it("should return 200");
        it("should return 500 when find errors");
    });

});