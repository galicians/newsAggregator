var should = require('should');
var Story = require('../../models/story');


describe('A single story', function() {
    var story;

        before(function(){
            story = new Story(({
                source: 'Sky News',
                title : 'Boxing Day Snow As UK Slides Towards -15C',
                description : 'Severe weather alerts are issued for Boxing Day ...',
                pubDate : "Tue Dec 30 2014 11:56:50",
                link : 'https://github.com/galicians'   
            }));
            Story.prototype.save = function(callback) {
                if(callback) callback();
            };
        });

        it("whend instanciated will have a source", function() {
            story.source.should.equal('Sky News');
        });
        it("whend instanciated will have a title",function() {
            story.title.should.equal('Boxing Day Snow As UK Slides Towards -15C');
        });
        it("whend instanciated will have a summary", function() {
            story.description.should.equal('Severe weather alerts are issued for Boxing Day ...');
        });
        it("whend instanciated will have a publication date", function() {
            story.pubDate.should.equal("Tue Dec 30 2014 11:56:50");
        });
        it("whend instanciated will have a link", function() {
            story.link.should.equal('https://github.com/galicians');
        });
        it("saves all the attributes of each object", function(done) { 
            story.save(function() {
                story.description.should.equal("Severe weather alerts are issued for Boxing Day ...");
                story.title.should.equal('Boxing Day Snow As UK Slides Towards -15C');
                story.source.should.equal('Sky News');
                story.pubDate.should.equal('Tue Dec 30 2014 11:56:50');
                story.link.should.equal('https://github.com/galicians');
            });
            done();
        });

});

