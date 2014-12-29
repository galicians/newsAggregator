var request = require('request');

var serverHelpers = {
    startServer : function(server){
        this.server = server;
        this.server.listen(0);
        this.port = this.server.address().port;
        this.origin = "http://localhost:" + this.port;
        console.log('Test server listening on', this.origin)
        return this.origin;
    },

    stopServer : function(){
        this.server.close();
        console.log('Test server terminated');
    },

    get : function(path, params){
        var url = this.origin + path;
        var self = this;
        var statusCode;

        request.get(url, {qs: params}, function(error, response) {
            self.error = error;
            self.response = response;
        });
    }
   
};


module.exports = serverHelpers;
