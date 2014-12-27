var should = require("should");
var controller = require("../controllers/news_controller");
var testServer = require("./test_server/server");
var serverAPI = require("./test_server/server_steps");

describe("news controller", function() {

    before(function(){
        serverAPI.startServer(testServer);
    });

    after(function(){
        
    });

    describe("when getting the feeds", function() {


        it("returns 200 when sucessfully connected to the source", function() {
   
        });

        it("returns 500 when not able to connect to the source", function() {

        });

        it("receives the data from the source", function() {

        });

        it("transforms the feeds into json objects", function() {

        });

    });



});