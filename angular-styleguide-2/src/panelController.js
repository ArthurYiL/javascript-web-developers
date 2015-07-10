(function() {
  "use strict";

  angular
    .module('app')
    .controller('PanelController', Panel);

  Panel.$inject = ['clientId', 'storyModel', 'helperFactory'];
  
  function Panel(clientId, storyModel, helperFactory) {
    /*jshint validthis: true */
    var vm = this;
    vm.promoCode = 'promo code for ' + clientId;

    // Prefer named functions and bind them at the top
    // of the controller. The function is defined later via 
    // a function declaration, hence it's hoisted.
    vm.logCurrentStory = logCurrentStory;

    vm.createStory = createStory;
    vm.stories = storyModel.getStories();
    vm.sum = helperFactory.sum(3, 5);
    vm.multiplication = helperFactory.multiply(3, 5);

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
