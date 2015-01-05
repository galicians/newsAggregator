

angular.module('newsApp').factory('newsService', ['$resource','$q', function($resource,$q) {
    return {
        getNews: function(){
            var deferred = $q.defer();
            $resource('https://newseveryminute.herokuapp.com/getNews').query()
            .$promise
            .then(function(data) {
                deferred.resolve(data);
            })
            .catch(function(error) {
                deferred.reject(error);
            })
              
            return deferred.promise;
        }
    }
}])

