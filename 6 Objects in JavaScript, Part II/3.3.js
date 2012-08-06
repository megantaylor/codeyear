function Person(name,age) {
  this.name = name;
  this.age = age;
};
// a function that prints the name of any given person
function printPersonName(p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Megan Taylor", 25);
printPersonName(me);
