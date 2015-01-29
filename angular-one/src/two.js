console.log('two here');

angular.module('controllerExample', [])
  .controller('SimpleController', ['$scope', SimpleController]);

function SimpleController($scope) {
  $scope.customers = [
    {name: 'Yuk Michaels', city: 'Phoenix'}, 
    {name: 'Elijah Smith', city: 'New York'}, 
    {name: 'Jane Doe', city: 'San Francisco'},
    {name: 'Kike Lopez', city: 'Chicago'}
  ];

  $scope.color = 'red';
}
