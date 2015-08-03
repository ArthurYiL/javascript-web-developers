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

      var url = 'http://wp.dev/wp-json/wp/v2/posts/1178';

      // working on top of promise
      //var promise = $http({
      //  method: 'GET',
      //  url: url
      //});

      //promise.success(function(data, status, headers, config) {
      //  console.log('success after $http');
      //  console.log(data);
      //});

      //promise.error(function(data, status, headers, config) {
      //  console.log('error after $http');
      //});

      // chaining
      //$http({
      //  method: 'GET',
      //  url: url
      //})
      //.success(function(data, status, headers, config) {
      //  console.log('success after $http');
      //  console.log(data);
      //})
      //.error(function(data, status, headers, config) {
      //  console.log('error after $http');
      //});
      
      // using then
      $http({
        method: 'GET',
        url: url
      })
      .then(function(resp) {
        console.log('first function after $http then');
        console.log(resp.data);
        console.log(resp);
      }, function(resp) {
        console.log('second function after $http then');
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
