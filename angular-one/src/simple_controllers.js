var demoApp = angular.module('demoApp', []);

// Using named function
//function SimpleController($scope) {
//  $scope.color = 'green';
//  $scope.customers = [
//    {name: 'Yuk Michaels', city: 'Phoenix'}, 
//    {name: 'Elijah Smith', city: 'New York'}, 
//    {name: 'Jane Doe', city: 'San Francisco'}
//  ];
//}
//demoApp.controller('SimpleController', SimpleController);

// Using anonymous function
//demoApp.controller('SimpleController', function ($scope) {
//  $scope.color = 'yellow';
//  $scope.customers = [
//    {name: 'Yuk Michaels', city: 'Phoenix'}, 
//    {name: 'Elijah Smith', city: 'New York'}, 
//    {name: 'Jane Doe', city: 'San Francisco'}
//  ];
//});

// Using object containing controller functions
var controllers = {};
controllers.SimpleController = function ($scope) {
  $scope.color = 'orange';
  $scope.customers = [
    {name: 'Yuk Michaels', city: 'Phoenix'}, 
    {name: 'Elijah Smith', city: 'New York'}, 
    {name: 'Jane Doe', city: 'San Francisco'}
  ];
};
demoApp.controller(controllers);
