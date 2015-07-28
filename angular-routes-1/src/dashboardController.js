(function() {
  "use strict";

  angular
    .module('dashboard.controller', [])
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = [];

  function DashboardController() {
    /*jshint validthis: true */
    console.log('test DashboardController');
    var vm = this;

    vm.person = {
      name: 'Joe',
      age: 24
    };
  }

})();
