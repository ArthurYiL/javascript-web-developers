var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {

  $scope.currentStory;

  $scope.setCurrentStory = function(story) {
    $scope.currentStory = story
  };

  $scope.createStory = function() {
    $scope.stories.push({
      title: 'New Story',
      description: 'Description pending'
    });
  };

  $scope.createStoryWithData = function(story) {
    $scope.stories.push({
      title: story.title,
      description: story.description
    });
  };

  $scope.consoleLog = function() {
    console.log('Testing');
  };

  $scope.stories = [
    {
      title: 'Story Zero', 
      description: 'Description pending 00.',
      criteria: 'Criteria pending 00',
      status: 'To do',
      type: 'Feature',
      reporter: 'Luke Skywalker',
      assignee: 'Brian Ford'
    },
    {title: 'Story 01', description: 'Description pending 01.'},
    {title: 'Story 02', description: 'Description pending 02.'},
    {title: 'Story 03', description: 'Description pending 03.'},
    {title: 'Story 04', description: 'Description pending 04.'},
    {title: 'Story Five', description: 'Description pending 05.'}
  ];

  $scope.statuses = [
    {name:'Back Log'},
    {name:'To Do'},
    {name:'In Progress'},
    {name:'Code Review'},
    {name:'QA Review'},
    {name:'Verified'},
    {name:'Done'}
  ];

  $scope.types = [
    {name:'Feature'},
    {name:'Enhancement'},
    {name:'Bug'},
    {name:'Spike'}
  ];

});
