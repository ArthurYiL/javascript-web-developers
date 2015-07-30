(function() {
  "use strict";

  angular
    .module('login.controller', ['ngRoute', 'app.location'])
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$routeParams', '$location', 'locationFactory'];

  function LoginController($routeParams, $location, locationFactory) {
    /*jshint validthis: true */
    console.log('test LoginController ' + $location.absUrl());
    var vm = this;

    vm.$location = $location;
    vm.locationFactory = {
      path: locationFactory.path()
    }

    vm.person = {
      name: 'Timothy',
      age: 784,
      username: $routeParams.username,
      id: $routeParams.id,
    };
  }

})();
