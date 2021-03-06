(function() {
  "use strict";

  // HomeController is available when injecting the home.controller module into app.
  // Same goes for other modules.
  // I'm using a template string and anonymous controller function for /dashboard.
  angular
    .module('app', ['ngRoute', 'story.model', 'panel.controller', 'home.controller', 'login.controller', 'dashboard.controller', 'simple.factory', 'helper.factory', 'simple.factory'])
    .run(['$rootScope', function($rootScope) {
      //console.log('run block');

      $rootScope.$on('$routeChangeStart', function(evt, next, current) {
        //console.log('$routeChangeStart');
        //console.log(evt);
        //console.log(next);
        //console.log(current);
      });

    }])
    .config(['$httpProvider', '$provide', '$routeProvider', '$locationProvider', function($httpProvider, $provide, $routeProvider, $locationProvider) {

      $httpProvider.defaults.headers.post['X-Posted-By'] = 'MyAngularApp';
      $httpProvider.defaults.headers.post['X-WP-Nonce'] = '83136a5506';

      //$locationProvider.html5Mode(false);
      //$locationProvider.hashPrefix('!');

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
