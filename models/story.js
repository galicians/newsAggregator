var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StorySchema = new Schema({ 
    title : {type: String, required: true },
    summary : {type: String, required: true },
    date : {type: Date, required: true },
    author : {type: String},
    link : { type: String, require: true},
    imageUrl : {type: String},
    categories : { type: []},
    source: {type: String, required: true },
    sourceLogo : {type: String}
});



module.exports = mongoose.model('Story', StorySchema);