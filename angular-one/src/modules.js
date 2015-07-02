var myAppModule = angular.module('myApp', []);

myAppModule.run(function () {
  // Some jasmine inside this angular controller
  describe("Some angular stuff", function() {
    it("says hi", function() {
      expect(helloWorld()).toEqual("hello");
    });
  });
});

myAppModule.filter('greet', function() {
  return function(name) {
    return 'Hello, ' + name + '!';
  }
});

// A global function and test with jasmine

function helloWorld() {
  return 'hello';
}

describe("Hello World", function() {
  it("says hello", function() {
    expect(helloWorld()).toEqual("hello");
  });
});
