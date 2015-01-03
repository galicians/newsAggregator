angular.module('newsApp').config(["$routeProvider", function($routeProvider) {
    
    $routeProvider

    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'newsController'
    })

    .when('/bbc', {
        templateUrl: 'views/bbc.html',
        controller: 'newsController'
    })

    .when('/sky', {
        templateUrl: 'views/sky.html',
        controller: 'newsController'
    })

    .when('/hacker', {
        templateUrl: 'views/hacker.html',
        controller: 'newsController'
    })
    
    .otherwise({
        redirectTo: '/'
    })
  
}]);