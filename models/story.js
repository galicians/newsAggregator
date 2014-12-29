var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StorySchema = new Schema({
    source: {type: String, required: true },
    title : {type: String, required: true },
    description : {type: String, required: true },
    pubDate : {type: Date, required: true },
    link : { type: String, require: true}
});


module.exports = mongoose.model('Story', StorySchema);