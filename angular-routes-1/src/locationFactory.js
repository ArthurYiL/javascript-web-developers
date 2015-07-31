(function() {
  "use strict";

  // TODO figure out why changing factory to service works here
  angular
    .module('app.location', [])
    .factory('locationFactory', locationFactory);

  locationFactory.$inject = ['$location'];

  function locationFactory($location) {
    function path() {
      return $location.path();
    }

    return {
      path: path
    }
  }
})();
