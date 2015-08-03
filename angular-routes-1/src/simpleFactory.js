(function() {
  "use strict";

  angular
    .module('simple.factory', [])
    .factory('simpleFactory', simpleFactory);

  simpleFactory.$inject = ['$http'];

  function simpleFactory($http) {
    var url = 'http://jsonplaceholder.typicode.com'

    function sayHi(name) {
      return 'Hi ' + name;
    }

    function postUserData(username) {
      console.log('calling POST $http');
      // probably having issues with Cross-site HTTP requests
      $http({
        method: 'POST',
        data: {
          "title": "Title Test",
          "body": "bar"
        },
        headers: {
          'X-WP-Nonce': '83136a5506'
        },
        url: url + '/posts'
      })
      .then(function(resp) {
        console.log('POST $http then');
        console.log(resp);
      }, function(resp) {
        console.log(resp);
        console.log('error POST $http then');
      });
    }

    function getUserData(username) {
      console.log('calling GET $http');
      // working on top of promise
      //var promise = $http({
      //  method: 'GET',
      //  url: url + '/posts/1178'
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
      //  url: url + '/posts/1178'
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
        params: {
          a: 1
        },
        url: url + '/posts/1'
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
      getUserData: getUserData,
      postUserData: postUserData
    };
  }
})();
