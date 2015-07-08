// No globals left behind
// Wrap Angular components in an Immediately Invoked Function Expression (IIFE).
// See: https://github.com/johnpapa/angular-styleguide#controllers

(function() {
  "use strict";
  
  var myApp = angular.module('myApp', []);
  
  // manually indentify dependencies
  // see: https://github.com/johnpapa/angular-styleguide#style-y091
  
  myApp.controller('DashboardController', Dashboard);
  Dashboard.$inject = ['$scope'];
  
  function Dashboard($scope) {
    $scope.number = 42;
  }
  
  myApp.controller('PanelController', Panel);
  Panel.$inject = ['clientId'];
  
  function Panel(clientId) {
    var panel = this;
    panel.promoCode = 'promo code for ' + clientId;
  }
  
  myApp.value('clientId', 'clientXYZ-112');
})();
