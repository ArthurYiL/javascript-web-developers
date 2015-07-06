"use strict";
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

myApp.controller('DemoController', ['clientId', 'clientIdFromFactory', 'apiToken', function DemoController(clientId, clientIdFromFactory, apiToken) {
  // Note we're using inline annotation too to inject dependencies.
  
  // Below, we try another way of doing "this.clientId = clientId;"
  // which creates consistency with the directive ng-controller="DemoController as demo".
  var demo = this;
  demo.clientId = clientId;
  demo.clientIdFromFactory = clientIdFromFactory;
  demo.apiToken = apiToken;
}]);
