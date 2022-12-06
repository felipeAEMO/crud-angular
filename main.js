(function(){
    //defining app name
    var app = angular.module('bookStoreApp',[]);

    //defining app controller
    app.controller('bookStoreController',['$scope',function($scope){
        $scope.books = [
            {title:"AngularJS",author:"Brad Green",cost:20},
            {title:"Head First EJB",author:"Kathy Sierra",cost:25},
            {title:"Professional Website Performance",author:"Peter Smith",cost:10}
        ];


        $scope.book = {};

        //utility function definitions
        $scope.addBook = function(book){
            $scope.books.push(book);
            $scope.book = {};
        }

        $scope.editBook = function(index){
            $scope.editId = index;
            $scope.book = $scope.books[index];
        }

        $scope.updateBook = function(book){
            $scope.books[$scope.editId] = book;
            $scope.editId = undefined;
            $scope.book = {};
        }

        $scope.deleteBook = function(index){
            $scope.books.splice(index,1);
        }
        
    }]);
})();