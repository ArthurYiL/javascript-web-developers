var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {

  $scope.currentStory;

  $scope.setCurrentStory = function(story) {
    $scope.currentStory = story
  };

  $scope.stories = [
    {title: 'Story Zero', description: 'Description pending 00.'},
    {title: 'Story 01', description: 'Description pending 01.'},
    {title: 'Story 02', description: 'Description pending 02.'},
    {title: 'Story 03', description: 'Description pending 03.'},
    {title: 'Story 04', description: 'Description pending 04.'},
    {title: 'Story Five', description: 'Description pending 05.'}
  ];

});
