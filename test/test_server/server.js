var http = require('http');

var server = http.createServer()

server.on("request", function(request, response) { 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

module.exports = server;