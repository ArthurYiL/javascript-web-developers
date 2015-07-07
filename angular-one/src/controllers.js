"use strict";

var myApp = angular.module('myApp', []);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 

myApp.controller('MyController', ['$scope', '$parse', '$interpolate', function($scope, $parse, $interpolate) {
  // This is using $scope, so the directive is a simple ng-controller="MyController".
  $scope.color = 'green';
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.substract = function(amount) { $scope.counter -= amount; };

  $scope.person = {
    name: "Ari Lerner",
    age: 24
  };

  $scope.$watch('emailBody', function(body) {
    if (body) {
      var template = $interpolate(body);
      $scope.previewText = template({to: $scope.to});
    }
  });

  $scope.$watch('expr', function(newVal, oldVal, scope) {
    if (newVal !== oldVal) {
      var parseFun = $parse(newVal);
      if (parseFun.assign != undefined) {
        var modifiedVal = '** modified: ' + newVal + ' **';
        $scope.parsedValue = parseFun.assign($scope, modifiedVal);
      }
    }
  });

}]);

myApp.value('clientId', 'a123');

// The factory returns a function object that accepts the message parameter
// while clientId is injected by the factory recipe below.
// Probably not a good idea to have this in the global scope.
function greetingsFactory(clientId) {
  return function(message) {
    return message + " " + clientId;
  };
}

// Inject clientId, a value defined above, to a factory that accepts
// a message parameter passed from the markup.
myApp.factory('greetings', ['clientId', greetingsFactory]);

myApp.controller('DemoController', ['clientId', 'greetings', function DemoController(clientId, greetings) {
  var demo = this;
  demo.clientId = clientId;
  demo.greetings = greetings;
}]);

myApp.controller('ParentController', ['$scope', function($scope) {
  $scope.person = {
    name: "Joe, The Dad",
    species: "human"
  };
}]);

// Just to play with parent and child controllers.
// We probably shouldn't repeat controllers in markup.
myApp.controller('ChildController', ['$scope', function($scope) {
  if ($scope.person == undefined) {
    $scope.person = {};
    $scope.person.name = "Little Jimmy";
  }
  $scope.person.lastname = "Greenface";
}]);
