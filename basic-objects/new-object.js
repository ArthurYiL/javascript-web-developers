var person = new Object();
person.name = "joe";
person.age = 29;
person.job = "software engineer";

person.sayName = function() {
  console.log(this.name);
}

var testModule = (function() {
  var counter = 0;
  return {

    incrementCounter: function() {
      return counter++;
    },

    resetCounter: function() {
      console.log("counter prior to reset: " + counter);
      counter = 0;
    }

  };
})();

//console.log(testModule);
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
