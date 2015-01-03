var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();

server.on("request", function(request, response) { 
    response.writeHead(200, {"Content-Type": "text/plain"});
    var feeds = fs.createReadStream(__dirname + '/data/bbc.feeds');
    feeds.pipe(response);
});

module.exports = server;