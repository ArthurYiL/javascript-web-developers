var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope, angelloModel, angelloHelper) {

  this.currentStory;

  this.values = [1, 3, 5];

  this.setCurrentStory = function(story) {
    this.currentStory = story;
    this.currentStatus = this.statusesIndex[story.status];
    this.currentType = this.typesIndex[story.type];
  };

  this.setCurrentStatus = function(status) {
    if (typeof this.currentStory !== 'undefined') {
      this.currentStory.status = status.name;
    }
  };

  this.setCurrentType = function(type) {
    if (typeof this.currentStory !== 'undefined') {
      this.currentStory.type = type.name;
    }
  };

  this.createStory = function() {
    this.stories.push({
      title: 'New Story',
      description: 'Description pending'
    });
  };

  this.createStoryWithData = function(story) {
    this.stories.push({
      title: story.title,
      description: story.description
    });
  };

  this.consoleLog = function() {
    console.log('Testing');
    console.log(this.statusesIndex);
  };

  this.stories = angelloModel.getStories();
  this.statuses = angelloModel.getStatuses();
  this.types = angelloModel.getTypes();

  this.typesIndex = angelloHelper.buildIndex(this.types, 'name');
  this.statusesIndex = angelloHelper.buildIndex(this.statuses, 'name');

});

myModule.factory('angelloHelper', function() {
  var buildIndex = function(source, property) {
    var tempArray = [];
    for (var i = 0, len = source.length; i < len; i++) {
      tempArray[source[i][property]] = source[i];
    }
    return tempArray;
  };

  return {
    buildIndex: buildIndex
  };

});

myModule.factory('angelloModel', function() {
  var getStatuses = function() {
    var tempArray = [
      {name:'Back Log'},
      {name:'To Do'},
      {name:'In Progress'},
      {name:'Code Review'},
      {name:'QA Review'},
      {name:'Verified'},
      {name:'Done'}
    ];
    return tempArray;
  };

  var getTypes = function() {
    var tempArray = [
      {name:'Feature'},
      {name:'Enhancement'},
      {name:'Bug'},
      {name:'Spike'}
    ];
    return tempArray;
  };

  var getStories = function() {
    var tempArray = [
      {
        title: 'Story Zero', 
        description: 'Description pending 00.',
        criteria: 'Criteria pending 00',
        status: 'To Do',
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
    return tempArray;
  };

  return {
    getStatuses: getStatuses,
    getTypes: getTypes,
    getStories: getStories
  };
});
