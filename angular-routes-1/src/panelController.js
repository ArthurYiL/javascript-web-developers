(function() {
  "use strict";

  angular
    .module('panel.controller', [])
    .controller('PanelController', Panel);

  Panel.$inject = ['$timeout', 'clientId', 'storyModel', 'helperFactory', 'simpleFactory'];
  
  function Panel($timeout, clientId, storyModel, helperFactory, simpleFactory) {
    /*jshint validthis: true */
    var vm = this;

    // Prefer named functions and bind them at the top
    // of the controller. The function is defined later via 
    // a function declaration, hence it's hoisted.
    vm.logCurrentStory = logCurrentStory;

    vm.createStory = createStory;
    vm.stories = storyModel.getStories();
    vm.sum = helperFactory.sum(3, 5);
    vm.multiplication = helperFactory.multiply(3, 5);
    vm.sayHi = simpleFactory.sayHi;

    vm.getUserData = simpleFactory.getUserData;
    vm.postUserData = simpleFactory.postUserData;

    // Avoid anonymous functions like this
    vm.setCurrentStory = function(story) {
      console.log('setCurrentStory');
      console.log(story);
    };

    function logCurrentStory(story) {
      console.log('logCurrentStory');
      console.log(story);
    }

    function createStory() {
      vm.stories.push({
        title: 'New story',
        description: 'New Story',
        criteria: 'Criteria pending.',
        status: 'Back Log',
        type: 'Feature',
        reporter: 'Pending',
        assignee: 'Pending'
      });
    }

  }

})();
