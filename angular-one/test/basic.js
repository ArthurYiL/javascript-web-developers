describe('MyController', function() {

  var $scope;

  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('MyController', {$scope: $scope});
  }));

  it('should say name of insect', function() {
    expect($scope.insect).toBe('tiny worm');
  });

  it('should be one', function() {
    expect(1).toBe(1);
  });

});
