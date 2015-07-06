"use strict";

// Providers' recipes.
// See: https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 

myApp.controller('MyController', ['$scope', function($scope) {
  // This is using $scope, so the directive is a simple ng-controller="MyController".
  $scope.color = 'green';
}]);

// Value recipe
myApp.value('clientId', 'a123');

// Factory recipe example, although using value is more appropiate here.
myApp.factory('clientIdFromFactory', function clientIdFactory() {
  return 'xyz789';
});

// Factory recipe, better example depending on clientId, the value previously
// defined..
myApp.factory('apiToken', ['clientId', function apiTokenFactory(clientId) {
  var apiToken = 'token_for_' + clientId;
  return apiToken;
}]);

// a function used to build an instance of a custom type
function UnicornLauncher(apiToken) {
  this.unicorn = 'unicorn from ' + apiToken;
}

// This service recipe is equivalent to a factory recipe with this:
// return new UnicornLauncher(apiToken);
myApp.service('unicornLauncher', ['apiToken', UnicornLauncher]);

// Constant recipe to be used in config block.
myApp.constant('planetName', 'Mars');
myApp.config(['planetName', function(planetName) {
  // the constant is available here in the configuration phase
  console.log('planetName defined as constant, hence available in configuration phase: ' + planetName);
}]);

myApp.controller('DemoController', ['clientId', 'clientIdFromFactory', 'apiToken', 'unicornLauncher', 'planetName', function DemoController(clientId, clientIdFromFactory, apiToken, unicornLauncher, planetName) {
  // Note we're using inline annotation too to inject dependencies.
  
  // Below, we try another way of doing "this.clientId = clientId;"
  // which creates consistency with the directive ng-controller="DemoController as demo".
  var demo = this;
  demo.clientId = clientId;
  demo.clientIdFromFactory = clientIdFromFactory;
  demo.apiToken = apiToken;
  demo.unicornLauncher = unicornLauncher;

  // the constant is available here in the run phase
  demo.planetName = planetName;
}]);
