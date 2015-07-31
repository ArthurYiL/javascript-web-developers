(function() {
  "use strict";

  angular
    .module('simple.factory', [])
    .factory('simpleFactory', simpleFactory);

  function simpleFactory() {
    function sayHi(name) {
      return 'Hi ' + name;
    }

    return {
      sayHi: sayHi
    }
  }
})();
