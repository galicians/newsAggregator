

var Server = {
    startServer : function(server, callback){
        this.server = server;
        this.server.listen(0, callback);
        this.port = this.server.address().port;
        this.origin = "http://localhost:" + this.port;
        console.log('test server listening on', this.origin)
    },

    stopServer : function(callback){
        this.server.close(callback);
    }
   
};


module.exports = Server;
