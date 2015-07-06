"use strict";
var myApp = angular.module('myApp', []);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 

myApp.controller('MyController', ['$scope', function($scope) {
  $scope.color = 'green';
}]);
