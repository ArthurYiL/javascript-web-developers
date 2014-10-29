var demoApp = angular.module('demoApp', []);

demoApp.controller('SimpleController', function ($scope) {

  $scope.color = 'yellow';

  $scope.customers = [
    {name: 'Yuk Michaels', city: 'Phoenix'}, 
    {name: 'Elijah Smith', city: 'New York'}, 
    {name: 'Michael Doe', city: 'San Francisco'}
  ];

  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.newCustomer.name, 
      city: $scope.newCustomer.city
    });
  }

});
