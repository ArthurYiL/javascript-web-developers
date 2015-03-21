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

// The odd syntax with the [] bracket notation is
// a really nifty feature of AngularJS and will eliminate a lot of dependency headaches. 
app.controller('MySecondController', ['$scope', function($scope) {
  $scope.movie = "Duck Tails";
  $scope.counter = 0;

  $scope.add = function(amount) {
    $scope.counter += amount;
  };

  $scope.substract = function(amount) {
    $scope.counter -= amount;
  };

  $scope.person = {
    name: "Tony Stark"
  };

}]);

app.controller('ParentCtrl', function($scope) {
  $scope.person = { greeted: false };
});

app.controller('ChildCtrl', function($scope) {
  $scope.sayHello = function() {
    $scope.person.name = "Tony Stark";
    $scope.person.greeted = true;
  };
});

console.log('hello monkey business');
