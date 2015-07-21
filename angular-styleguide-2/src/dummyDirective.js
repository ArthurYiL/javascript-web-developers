(function() {
  "use strict";

  angular
    .module('appDummyDirective', [])
    .directive('dummyDirective', dummyDirective);

  // see other examples of directives in angular-one/src/controllers.js
  function dummyDirective() {
    return {
      replace: true,
      template: '<h1>This is a dummy directive. See dummyDirective</h1>'
    }
  }

})();
