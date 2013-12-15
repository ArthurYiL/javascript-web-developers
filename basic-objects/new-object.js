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

    incrementConter: function() {
      return counter++;
    },

    resetCounter: function() {
      console.log("counter prior to reset: " + counter);
      counter = 0;
    }

  };
})();
