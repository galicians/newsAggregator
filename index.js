var restify = require('restify');
var controller = require("./controllers/news_controller");
var mongoose = require('mongoose');
var Promise = require('bluebird');
var data = require('./config');
var utils = require('./utils/utils');
var ecstatic = require('ecstatic');


var connectDB = Promise.promisify(mongoose.connect, mongoose);

mongoose.set('debug', true);

setInterval(function() { utils.retriever(data.sources) }, data.frequency);

var app = restify.createServer()

app.use(ecstatic({ root: __dirname + '/frontend/public/'}));
 
app.get("/", function(req,res, next){
    res.send('index.html')
})

app.get('/getNews', controller.getNews )


app.get(/.*/, restify.serveStatic({
    directory: 'public',
    default: 'index.html'
 }));


connectDB(data.dbUrl)
.then(function() {
    console.log("connected to mongodb successfully!")
})

app.listen(data.port, function() {
    console.log('Restify server listening at port', data.port);
});