(function() {
  "use strict";

  // the appFilters module in injected to the app module in app.module.js and can be used by
  // components added to app. Note there's no need to inject myFilter anywhere.
  // Just use it in index.html
  angular
    .module('appFilters', [])
    .filter('myFilter', myFilter);

  function myFilter() {
    return function(input) {
      if (input) {
        return '[*[' + input + ']*]';
      }
    }
  }

})();
