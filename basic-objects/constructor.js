function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}

var person3 = new Person("Mike", 29, "Software Engineer");
var person4 = new Person("Oscar", 27, "Doctor");

//> person3.constructor == Person
//true
//> person3 instanceof Person
//true
