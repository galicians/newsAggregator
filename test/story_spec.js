var should = require('should');
var Story = require('../models/story');


describe('a single story', function() {
    var story;

    describe('when instanciated can have', function() {

        before(function(){
            story = new Story(({
                source: 'Sky News',
                title : 'Boxing Day Snow As UK Slides Towards -15C',
                description : 'Severe weather alerts are issued for Boxing Day ...',
                pubDate : new Date(),
                link : 'https://github.com/galicians'   
            }));
        });

        it("a source", function() {
            story.source.should.equal('Sky News');
        });
        it("a title",function() {
            story.title.should.equal('Boxing Day Snow As UK Slides Towards -15C');
        });
        it("a summary", function() {
            story.description.should.equal('Severe weather alerts are issued for Boxing Day ...');
        });
        it("a publication date", function() {
            story.pubDate.should.not.equal(undefined);
        });
        it("a link", function() {
            story.link.should.equal('https://github.com/galicians');
        });
     });

});

