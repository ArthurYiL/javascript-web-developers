var myModule = angular.module('Angello.Storyboard', [])
  .controller('StoryboardCtrl', function() {

    var storyboard = this;

    storyboard.stories = [
      {
        id: 1,
        title: 'First Story',
        type: 'Spike',
        description: 'This is a test',
        status: 'To Do'
      },
      {
        id: 2,
        title: 'Second Story',
        type: 'Enhancement',
        description: 'Testing something',
        status: 'In Progress'
      },
      {
        id: 3,
        title: 'Third Story',
        type: 'Enhancement',
        description: 'A Third Test',
        status: 'In Progress'
      },
      {
        id: 4,
        title: 'New Story',
        type: 'Enhancement',
        description: 'More Test',
        status: 'Code Review'
      }
    ];

    storyboard.statuses = [
      {name: 'To Do'},
      {name: 'In Progress'},
      {name: 'Code Review'}
    ];
});
