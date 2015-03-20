var app = angular.module('Hello', []);

function MyController($scope) {
  // Disabling for testing but note how $scope.$apply is needed inside setInterval.
  // This is because, if the callback executes outside of the angular context,
  // we can force the $scope to have knowledge of the change using the $apply method.
  //$scope.clock = {
  //  now: new Date()
  //};
  //var updateClock = function() {
  //  $scope.clock.now = new Date();
  //};
  //setInterval(function() {
  //  $scope.$apply(updateClock);
  //}, 1000);
  //updateClock();
}

app.controller('MyController', MyController);

app.controller('MySecondController', 
  ['$scope', function($scope) {
    $scope.movie = "Duck Tails";
  }]);

console.log('hello monkey business');
