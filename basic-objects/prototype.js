function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 25;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};

var person5 = new Person();
var person6 = new Person();

