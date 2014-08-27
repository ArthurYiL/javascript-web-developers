var mymodule = require('./mymodule');

var num = 4;
console.log("This is a test with number: " + num);

console.log("mymodule.num: " + mymodule.num);
console.log("Adding %d and %d with mymodule.sum results in %d", 3, 5, mymodule.sum(3, 5));
