var should = require("should");
var controller = require("../controllers/news_controller");
var testServer = require("./test_server/server");
var serverAPI = require("./test_server/server_steps");
var Promise = require('Bluebird');

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
                data.statusCode.should.equal(200)
                done()
            }).catch(function(err){
                err.should.equal(undefined)
                done()
            })
        });

        it("an expection is throw, and error is handled when the connection fails", function() {
            controller.getAllFeeds('source').then( function(data) {
                data.should.equal(undefined)
            }).catch(function(err){
                err.should.not.equal(undefined)
            })
        });



        it("retrieves the data from the source", function() {
            
        });

        it("transforms data feeds into json objects", function() {

        });
       

    });

    describe("when fetching the news from the database", function(){
        it("should return 200");
        it("should return 500 when find errors");
    })

});