var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StorySchema = new Schema({
    source: {type: String, required: true },
    title : {type: String, required: true , index: {unique: true}},
    description : {type: String },
    pubDate : {type: String },
    link : { type: String },
    total : {type: Number }
});

var storyTotal = 0;

StorySchema.pre('save', function(next) {
    storyTotal += 1;
    this.total = storyTotal;
    next();
});

module.exports = mongoose.model('Story', StorySchema);