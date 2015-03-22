module.exports = function(grunt) {

  grunt.registerTask('default', function() {
    grunt.log.writeln("Hello from Grunt.");
  });

  grunt.registerTask('greet', 'Say  hi to some name', function(name) {
    grunt.log.writeln("Hi there, " + name);
  });

  grunt.registerTask('addNumbers', function(first, second) {
    if (isNaN(Number(first))) {
      grunt.warn('First argument must be a number');
    }
    var answer = Number(first) + Number(second);
    grunt.log.writeln(first + " + " + second + " is " + answer);
  });

  grunt.registerTask('all', ['default', 'greet:Brian', 'addNumbers:1:2']);
}
