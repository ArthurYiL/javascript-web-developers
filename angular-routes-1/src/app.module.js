(function() {
  "use strict";

  angular
    .module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      console.log('routes with inline annotation');
    }]);

  //angular
  //  .module('app', ['ngRoute'])
  //  .config(setupRoutes);

  //setupRoutes.$inject = ['$routeProvider'];

  //function setupRoutes($routeProvider) {
  //  console.log('route withs $inject');
  //}

})();
