(function() {
  "use strict";

  angular
    .module('login.controller', [])
    .controller('LoginController', LoginController);

  LoginController.$inject = [];

  function LoginController() {
    /*jshint validthis: true */
    console.log('test LoginController');
    var vm = this;

    vm.person = {
      name: 'Tim',
      age: 784
    };
  }

})();
