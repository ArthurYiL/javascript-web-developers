"use strict";

var myApp = angular.module('myApp', []);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 

myApp.controller('MyController', ['$scope', function($scope) {
  // This is using $scope, so the directive is a simple ng-controller="MyController".
  $scope.color = 'green';
}]);

myApp.value('clientId', 'a123');

// The factory returns a function object that accepts the message parameter
// while clientId is injected by the factory recipe below.
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
