(function() {
  "use strict";

  angular
    .module('app')
    .controller('PanelController', Panel);

  Panel.$inject = ['clientId'];
  
  function Panel(clientId) {
    /*jshint validthis: true */
    var vm = this;
    vm.promoCode = 'promo code for ' + clientId;

    vm.stories = [
      {
        title: 'First story',
        description: 'Our first story',
        criteria: 'Criteria pending.',
        status: 'To Do',
        type: 'Feature',
        reporter: 'Lukas Silva',
        assignee: 'Brian Ford'
      },
      {
        title: 'Second story',
        description: 'Do something',
        criteria: 'Criteria pending.',
        status: 'Back Log',
        type: 'Feature',
        reporter: 'Lukas Silva',
        assignee: 'Brian Ford'
      }
    ];

    vm.setCurrentStory = function(story) {
      console.log('setCurrentStory');
      console.log(story);
    };

    vm.logCurrentStory = logCurrentStory;

    function logCurrentStory(story) {
      console.log('logCurrentStory');
      console.log(story);
    }

  }

})();
