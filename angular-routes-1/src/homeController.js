(function() {
  "use strict";

  angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    /*jshint validthis: true */
    console.log('test HomeController');
    var vm = this;

    vm.person = {
      name: 'Daniel',
      age: 10
    };
  }

})();
