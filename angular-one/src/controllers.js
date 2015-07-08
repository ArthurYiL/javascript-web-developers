"use strict";

var myApp = angular.module('myApp', []);

// inject to controller using array
// see: https://docs.angularjs.org/guide/di 

myApp.controller('MyController', ['$scope', '$parse', '$interpolate', '$filter', function($scope, $parse, $interpolate, $filter) {
  // This is using $scope, so the directive is a simple ng-controller="MyController".
  $scope.color = $filter('uppercase')('green');
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.substract = function(amount) { $scope.counter -= amount; };

  $scope.person = {
    name: "Ari Lerner",
    age: 24
  };

  $scope.$watch('emailBody', function(body) {
    if (body) {
      var template = $interpolate(body);
      $scope.previewText = template({to: $scope.to});
    }
  });

  $scope.$watch('expr', function(newVal, oldVal, scope) {
    if (newVal !== oldVal) {
      var parseFun = $parse(newVal);
      if (parseFun.assign != undefined) {
        var modifiedVal = '** modified: ' + newVal + ' **';
        $scope.parsedValue = modifiedVal;
        //$scope.parsedValue = parseFun.assign($scope, modifiedVal);
        //parseFun.assign($scope.parsedValue, 'YparsedValue');
      }
    }
  });

  $scope.myLinkText = 'link text from controller';
  $scope.myUrl = 'http://bing.com';

}]);

myApp.directive('myDirective', function() {
  return {
    restrict: 'E',
    replace: true,
    //template: '<a href="http://google.com">Click me to go to Google</a>'
    templateUrl: '/src/directiveTemplate.html'
  }
});

// Use scope with @ for one-time binding, which won't evaluate
// the values of my-url and my-link-text in the directive.
myApp.directive('mySecondDirective', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      myUrl: '@',
      myLinkText: '@'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  }
});

// Use scope with = for two-way binding.
// In this case, single quotes need to be used in the directive
// to avoid evaluating my-url and my-link-text.
myApp.directive('myOtherDirective', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      myUrl: '=',
      myLinkText: '='
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  }
});

myApp.value('clientId', 'a123');

// The factory returns a function object that accepts the message parameter
// while clientId is injected by the factory recipe below.
// Probably not a good idea to have this in the global scope.
function greetingsFactory(clientId) {
  return function(message) {
    return message + " " + clientId;
  };
}

// Inject clientId, a value defined above, to a factory that accepts
// a message parameter passed from the markup.
myApp.factory('greetings', ['clientId', greetingsFactory]);

myApp.controller('DemoController', ['clientId', 'greetings', function DemoController(clientId, greetings) {
  var demo = this;
  demo.clientId = clientId;
  demo.greetings = greetings;
}]);

myApp.controller('ParentController', ['$scope', function($scope) {
  $scope.person = {
    name: "Joe, The Dad",
    species: "human"
  };
}]);

// Just to play with parent and child controllers.
// We probably shouldn't repeat controllers in markup.
myApp.controller('ChildController', ['$scope', function($scope) {
  if ($scope.person == undefined) {
    $scope.person = {};
    $scope.person.name = "Little Jimmy";
  }
  $scope.person.lastname = "Greenface";
}]);
