var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StorySchema = new Schema({
    source: {type: String, required: true },
    title : {type: String, required: true },
    description : {type: String, required: true },
    pubDate : {type: String, required: true },
    link : { type: String, require: true},
    total : {type: Number}
});

var storyTotal = 0;

StorySchema.pre('save', function(next) {
    storyTotal += 1;
    this.total = storyTotal;
    next();
});

module.exports = mongoose.model('Story', StorySchema);