(function() {
  "use strict";

  var myApp = angular.module('myApp', []);

  myApp.value('clientId', 'clientXYZ-112');

  myApp.controller('PanelController', Panel);
  Panel.$inject = ['clientId'];
  
  function Panel(clientId) {
    var panel = this;
    panel.promoCode = 'promo code for ' + clientId;
  }

})();
