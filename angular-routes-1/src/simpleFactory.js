(function() {
  "use strict";

  angular
    .module('simple.factory', [])
    .factory('simpleFactory', simpleFactory);

  simpleFactory.$inject = ['$http'];

  function simpleFactory($http) {
    function sayHi(name) {
      return 'Hi ' + name;
    }

    function getUserData(username) {
      console.log('calling with $http');

      var promise = $http({
        method: 'GET',
        url: 'https://api.github.com/users/defunkt'
      });

      promise.success(function(data, status, headers, config) {
        console.log('success after $http');
        console.log(data);
      });

      promise.error(function(data, status, headers, config) {
        console.log('error after $http');
      });

      var data = {
        login: 'mike',
        id: 4
      };

      return data;
    }

    return {
      sayHi: sayHi,
      getUserData: getUserData
    };
  }
})();
