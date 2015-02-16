var myModule = angular.module('Angello.Storyboard', [])
  .controller('StoryboardCtrl', function(STORY_STATUSES) {

    var storyboard = this;

    storyboard.currentStory = null;
    storyboard.editedStory = {};

    storyboard.setCurrentStory = function(story) {
      storyboard.currentStory = story;
      storyboard.editedStory = angular.copy(storyboard.currentStory);
    };

    storyboard.resetForm = function () {
      storyboard.currentStory = null;
      storyboard.editedStory = {};
      storyboard.detailsForm.$setPristine();
      storyboard.detailsForm.$setUntouched();
    };


    function ID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }

    storyboard.createStory = function() {
      console.log('Creating story...');
      var newStory = angular.copy(storyboard.editedStory);
      newStory.id = ID();
      newStory.status = 'To Do';
      storyboard.stories.push(newStory);
      storyboard.resetForm();
    };

    storyboard.deleteStory = function(storyId) {
      // using underscore to remove item from stories array
      storyboard.stories = _.filter(storyboard.stories, function(item) {
        return item.id !== storyId;
      });
    };

    storyboard.updateStory = function() {
      var fields = ['title', 'description', 'reporter', 'type', 'status'];

      fields.forEach(function(field) {
        storyboard.currentStory[field] = storyboard.editedStory[field];
      });

      storyboard.resetForm();
    };

    storyboard.updateCancel = function() {
      storyboard.resetForm();
    };

    storyboard.stories = [
      {
        id: 1,
        reporter: 1,
        title: 'First Story',
        type: 'Spike',
        description: 'This is a test',
        status: 'To Do'
      },
      {
        id: 2,
        reporter: 2,
        title: 'Second Story',
        type: 'Enhancement',
        description: 'Testing something',
        status: 'In Progress'
      },
      {
        id: 3,
        reporter: 3,
        title: 'Third Story',
        type: 'Enhancement',
        description: 'A Third Test',
        status: 'In Progress'
      },
      {
        id: 4,
        reporter: 2,
        title: 'New Story',
        type: 'Enhancement',
        description: 'More Test',
        status: 'Code Review'
      }
    ];

    storyboard.showUserId = function(id) {
      console.log('user.id: ' + id);
    };

    storyboard.users = [
      {id: 1, name: 'Mike-1'},
      {id: 2, name: 'Tom-2'},
      {id: 3, name: 'Albert-3'},
      {id: 4, name: 'John-4'}
    ];

    storyboard.statuses = STORY_STATUSES;
});

myModule.value('STORY_STATUSES', [
  {name: 'To Do'},
  {name: 'In Progress'},
  {name: 'In Planning'},
  {name: 'Enhancement'},
  {name: 'Code Review'}
]);
