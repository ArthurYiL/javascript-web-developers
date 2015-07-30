(function() {
  "use strict";

  angular
    .module('app')
    .factory('helperFactory', helperFactory);

  function helperFactory() {
    function sum(a, b) {
      return a + b;
    }

    function multiply(a, b) {
      return a * b * 2;
    }

    return {
      sum: sum,
      multiply: multiply
    }
  }
})();
