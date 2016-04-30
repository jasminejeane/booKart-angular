angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log("An input changed");
  };
  
  $scope.helloWorld = dataService.helloWorld;

dataService.getTodos(function(response){
  console.log(response.data);
  $scope.todos =response.data;

});
})

// http provider handles all http request
// dependency injection
.service('dataService', function($http){

  this.helloWorld = function(){
    console.log("This is a hello console service!");
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
  .then(callback);
};
});









;