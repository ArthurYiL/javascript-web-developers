function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Joe"];
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

var person7 = new Person("Nick", 30, "Architect");
var person8 = new Person("Pete", 22, "Doctor");

person7.friends.push("Mick");
person7.friends.push("Tim");
console.log(person7.friends);
console.log(person8.friends);


