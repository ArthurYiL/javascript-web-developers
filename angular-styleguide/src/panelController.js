(function() {
  "use strict";

  angular
    .module('app')
    .controller('PanelController', Panel);

  Panel.$inject = ['clientId'];
  
  function Panel(clientId) {
    var panel = this;
    panel.promoCode = 'promo code for ' + clientId;
  }

})();
