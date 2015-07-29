(function() {
  "use strict";

  // HomeController is available when injecting the home.controller module into app.
  // Same goes for other modules.
  // I'm using a template string and anonymous controller function for /dashboard.
  angular
    .module('app', ['ngRoute', 'home.controller', 'login.controller', 'dashboard.controller'])
    //.run(['$templateCache', function($templateCache) {
    //  console.log('run to clear template caches');
    //  $templateCache.removeAll();
    //}])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .when('/login/:username', {
          templateUrl: 'views/login.html',
          controller: 'LoginController'
        })
        .when('/dashboard', {
          template: '<h1>from template in /dashboard route {{ person }}.</h1>',
          controller: ['$scope', 'color', function($scope, color) {
            $scope.person = {
              name: 'JoeAnonymous',
              color: color,
              age: 12
            };
          }],
          resolve: {
            color: function() {
              return 'red';
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

  //angular
  //  .module('app', ['ngRoute'])
  //  .config(setupRoutes);

  //setupRoutes.$inject = ['$routeProvider'];

  //function setupRoutes($routeProvider) {
  //  console.log('route withs $inject');
  //}

})();
