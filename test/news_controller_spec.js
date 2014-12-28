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
                done(err)
            })
            
        });

        it("should return 500 as status code when connection fails", function(done) {
            controller.getAllFeeds('source').then( function(data) {
                console.log('data error', data)
                done();
            }).catch(function(err){
                console.log('mocha error', err)
                done();
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