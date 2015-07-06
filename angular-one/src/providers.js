"use strict";
var myApp = angular.module('myApp', []);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 

// Value recipe
myApp.value('clientId', 'a123');

myApp.controller('MyController', ['$scope', function($scope) {
  // This is using $scope, so the directive is a simple ng-controller="MyController".
  $scope.color = 'green';
}]);

myApp.controller('DemoController', ['clientId', function DemoController(clientId) {
  // Note we're using inline annotation too to inject dependencies.
  
  // Below, we try another way of doing "this.clientId = clientId;"
  // which creates consistency with the directive ng-controller="DemoController as demo".
  var demo = this;
  demo.clientId = clientId;
}]);
