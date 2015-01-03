var controller = require("../controllers/news_controller");

exports.retriever = function(sources) {
    sources.forEach( function(source) {
     controller.getAllFeeds(source).then( function(feedsNews) {
      controller.feedsToJson(feedsNews).then( function(jsonNews){
        controller.newsToMongo(jsonNews).then(function(msg) {
            console.log(msg);
        });
      });
    });
    });
};