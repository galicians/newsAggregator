

angular.module('newsApp').controller('newsController', ['newsService','$scope', function(newsService,$scope) {
    $scope.loading = true;
    $scope.newsLimit = 10;
    $scope.getNews = function() {
        newsService.getNews().then(function(news){
            $scope.news = news
            console.log($scope.news)
            $scope.loading = false;
        }).catch(function(error){
            // console.log("Logs: error in newsController", error);
            $scope.loading = false;
        })
    }

    $scope.getNews();
}])