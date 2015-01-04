
describe('News Service', function() {
    var $httpBackend;
    var service;
    var newsUrl = 'http://localhost:3000/getNews';
    var data;
    var err;

    beforeEach(module('newsApp'));
    

    beforeEach(inject(function(_$httpBackend_, $injector) {

        createNewsService = function() {
            return $injector.get('newsService');
        };

        $httpBackend = _$httpBackend_;
        service = createNewsService();
    }));
    
    describe("When getting all news", function() {
        it("Should make a call to the API", function() {
            $httpBackend.expectGET(newsUrl).respond(200)
            service.getNews();
            $httpBackend.verifyNoOutstandingExpectation();
        });
        it("Should send an error when API fails", function() {
            $httpBackend.whenGET(newsUrl).respond(500)
            service.getNews().catch(function(e) {
                err = e;
            });
            $httpBackend.flush();
            expect(err).toBeDefined();
        });
        it("should send data when API is successful", function() {
            $httpBackend.whenGET(newsUrl).respond(200, [{name: 'sky news'}]);
            service.getNews().then(function(d) {
                data = d;
            });
            $httpBackend.flush();
            expect(data[0].name).toEqual('sky news');
        });
    });
});

