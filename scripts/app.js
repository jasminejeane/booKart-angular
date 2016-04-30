angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
  
  $scope.todos = [

  {"name": "Focus on angular"},
  {"name": "You may have to cancel BGC volunteering"},
  {"name": "Do rangular app"},
  {"name": "Finish this tutorial"},
  {"name": "Watch Chronicals of Narnia"},
  {"name": "Clean up for your guest"},
  {"name": "Stay away from negativity"}
  

]
});