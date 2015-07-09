(function() {
  "use strict";

  angular
    .module('app')
    .controller('PanelController', Panel);

  Panel.$inject = ['clientId'];
  
  function Panel(clientId) {
    /*jshint validthis: true */
    var vm = this;
    vm.promoCode = 'promo code for ' + clientId;
  }

})();
