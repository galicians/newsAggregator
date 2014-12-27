

exports.getAllFeeds = function(source){
    rsj.r2j(source,function(jsonFeeds) { 
    var news = JSON.parse(jsonFeeds);

    
    console.log("===============news===============")
    news.forEach(function(story) {
        console.log('Story:' + story.title)
    })
})

}


exports.fetchAllNews = function() {

}