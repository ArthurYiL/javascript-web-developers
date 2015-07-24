(function() {
  "use strict";

  angular
    .module('app')
    .service('storyModel', storyModel);

  function storyModel() {
    var model = this,
      stories = [
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

      model.getStories = getStories;

      function getStories() {
        return stories;
      }

  }

})();
