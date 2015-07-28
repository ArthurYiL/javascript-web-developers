(function() {
  "use strict";

  // DashboardController is available when injecting the dashboard.controller module into app.
  // Same goes for other modules..
  angular
    .module('app', ['ngRoute', 'home.controller', 'login.controller', 'dashboard.controller'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController'
        })
        .when('/dashboard', {
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardController'
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
