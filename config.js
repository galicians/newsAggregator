var bbcSource = "http://feeds.bbci.co.uk/news/rss.xml";
var skySource = "http://feeds.skynews.com/feeds/rss/uk";
var hackerSource = "http://feeds.feedburner.com/TheHackersNews";
exports.port = process.env.PORT || 3000;
exports.sources = [];
exports.frequency = 10000;
exports.dbUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/aggregatornews';
exports.queryLimit = 2000;

exports.sources.push(bbcSource);
exports.sources.push(skySource);
exports.sources.push(hackerSource);




