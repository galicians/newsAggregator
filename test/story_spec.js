var should = require('should');
var Story = require('../models/story')


describe('a single story', function() {
    var story;

    describe('when instanciated can have', function() {

        before(function(){
            story = new Story(({ 
                title : 'Boxing Day Snow As UK Slides Towards -15C',
                summary : 'Severe weather alerts are issued for Boxing Day ...',
                date : new Date(),
                link : 'https://github.com/galicians',
                author : 'pablo portabales',
                categories : ['weather','Boxing Day'],
                imageUrl : 'http://media.skynews.com/media.jpg',
                source: 'Sky News',
                sourceLogo : 'http://media.skynews.com/images/web/logo/skynewshd_rss.png'
            }));
        })

        it("a title",function() {
            story.title.should.equal('Boxing Day Snow As UK Slides Towards -15C');
        });
        it("a summary", function() {
            story.summary.should.equal('Severe weather alerts are issued for Boxing Day ...');
        });
        it("a date", function() {
            story.date.should.not.equal(undefined);
        });
        it("a link", function() {
            story.link.should.equal('https://github.com/galicians');
        });
        it("an author", function() {
            story.author.should.equal('pablo portabales');
        });
        it("categories", function() {
            story.categories[0].should.eql('weather');
            story.categories[1].should.eql('Boxing Day');
        });
        it("an image url", function() {
            story.imageUrl.should.equal("http://media.skynews.com/media.jpg");
        });
        it("a source", function() {
            story.source.should.equal('Sky News');
        });
        it("a should have a source logo", function() {
            story.sourceLogo.should.equal("http://media.skynews.com/images/web/logo/skynewshd_rss.png");
        });
     });

});

