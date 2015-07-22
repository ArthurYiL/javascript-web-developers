(function() {
  "use strict";

  angular
    .module('app')
    .controller('PanelController', Panel);

  Panel.$inject = ['clientId', 'storyModel', 'helperFactory', '$timeout'];
  
  function Panel(clientId, storyModel, helperFactory, $timeout) {
    /*jshint validthis: true */
    var vm = this;

    // It’s important to not to set a value object (string, boolean, or number) 
    // directly on the $scope of a controller for a number of technological and architectural reasons. 
    // Data in the DOM should always use a . (dot). 
    // Following this rule will keep you out of unexpected trouble.
    // So, this one is not a good idea.
    vm.promoCode = 'promo code for ' + clientId;

    // but this one, which is an object, is fine.
    vm.clock = {};

    // Prefer named functions and bind them at the top
    // of the controller. The function is defined later via 
    // a function declaration, hence it's hoisted.
    vm.logCurrentStory = logCurrentStory;

    vm.createStory = createStory;
    vm.stories = storyModel.getStories();
    vm.sum = helperFactory.sum(3, 5);
    vm.multiplication = helperFactory.multiply(3, 5);

    vm.updateClock = updateClock;

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

    function updateClock() {
      vm.clock.now = new Date();
      $timeout(function() {
        vm.updateClock();
      }, 1000);
    }
    // Needs to be called like this to start:
    //vm.updateClock();

  }

})();
