(function() {
  "use strict";

  angular
    .module('app.location', ['ngRoute'])
    .service('locationFactory', locationFactory);

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
