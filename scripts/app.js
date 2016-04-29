angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function(){ 

    console.log("Hello there! The is the hello World controller");
  };

});

