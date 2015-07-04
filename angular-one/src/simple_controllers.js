var demoApp = angular.module('demoApp', []);

// WATCH OUT! All of these are using implicit annotation for dependency injection.
// The recommended way to annotate dependencies is with an inline array.
// See: https://docs.angularjs.org/guide/di

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

  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.newCustomer.name, 
      city: $scope.newCustomer.city
    });
  }

};
demoApp.controller(controllers);
