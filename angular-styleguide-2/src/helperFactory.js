(function() {
  "use strict";

  angular
    .module('app')
    .service('helperFactory', helperFactory);

  function helperFactory() {
    function sum(a, b) {
      return a + b;
    }

    function multiply(a, b) {
      return a * b;
    }

    return {
      sum: sum,
      multiply: multiply
    }
  }
})();
