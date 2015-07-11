(function() {
  "use strict";

  angular
    .module('app')
    .directive('storyDirective', storyDirective);

  // see other examples of directives in angular-one/src/controllers.js
  function storyDirective() {
    return {
      scope: true, // use story from the controller
      replace: true,
      template: '<div><h4>{{ story.title }}</h4><p>{{ story.description }}</p></div>'
    }
  }

})();
