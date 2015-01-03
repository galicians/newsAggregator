

describe('News controller', function() {
    var newsService;
    var $q;
    var deferred;
    var $rootScope;
    var scope;

    beforeEach(module('newsApp'));
    beforeEach(module('newsAppControllers'));

    beforeEach(module(function($provide){
        newsService = {
            getNews: function(){}
        };

        $provide.value('newsService', newsService);
    }));

    beforeEach(inject(function(_$rootScope_, $controller, _$q_){
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $q = _$q_
        deferred = $q.defer();

        spyOn(newsService, 'getNews')
        .and.returnValue(deferred.promise);

        $controller('newsController', {
            $scope: scope
        });
        
    }));

  
    describe('fetching news', function() {

        function sendDataFromService(){
            deferred.resolve([{name: 'sky news'}]);
        };

        describe('Scope', function(){
            it('Should initialize loading to true', function(){
              expect(scope.loading).toBeTruthy();
            });
        });

        it('Should populate news from service', function() {

            scope.getNews();

            sendDataFromService();

            $rootScope.$digest();

            expect(scope.news[0].name).toEqual('sky news');
        });
        it("Should should set loading to false when data comes back", function() {

            scope.getNews();

            scope.loading = true;

            sendDataFromService();

            $rootScope.$digest();

            expect(scope.loading).toBeFalsy();
        });
        it("Should set loading to false when service fails", function() {
            scope.getNews();
            scope.loading = true;

            deferred.reject();
            $rootScope.$digest();

            expect(scope.loading).toBeFalsy()
        })
    });

      describe('Controller Scope', function(){
        describe('When loading controller', function() {
            it('should fetch all news', function(){
              expect(newsService.getNews).toHaveBeenCalled();
            });
        });
    });
});