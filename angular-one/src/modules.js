var myAppModule = angular.module('myApp', []);

myAppModule.filter('greet', function() {
  return function(name) {
    return 'Hello, ' + name + '!';
  }
});

myAppModule.service('testService', [function() {
  var service = this;
  service.saySomething = function() {
    console.log('saying something here');
  };
}]);

myAppModule.service('testRunService', function() {
  var service = this;
  service.say = function() {
    console.log('saying from run service');
  };

  service.sayName = function(name) {
    console.log('the name is ' + name);
  };
});

myAppModule.filter('aloha', ['testService', function(testService) {
  testService.saySomething();
  return function(name) {
    return 'Aloha, ' + name + '!';
  }
}]);

myAppModule.run(['testRunService', function(testRunService) {
  testRunService.say();
}]);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 
myAppModule.controller('MyController', ['$scope', 'testRunService', function($scope, testRunService) {
  $scope.insect = 'tiny worm';

  $scope.double = function(value) {
    if (value == undefined) {
      value = 0;
    }
    return value * 2;
  };

  testRunService.sayName($scope.insect);

  // Some jasmine inside this angular controller
  describe("Some angular stuff", function() {
    it("says hi", function() {
      expect(helloWorld()).toEqual("hello");
    });
  });

}]);

// inject without array, just parameters
//myAppModule.controller('MyController', function($scope, testRunService) {
//  $scope.insect = 'fly';
//  testRunService.sayName($scope.insect);
//});

// A global function and test with jasmine

function helloWorld() {
  return 'hello';
}

describe("Hello World", function() {
  it("says hello", function() {
    expect(helloWorld()).toEqual("hello");
  });
});
