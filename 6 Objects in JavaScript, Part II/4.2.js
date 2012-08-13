// create your Animal class here
function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal
Penguin.prototype.sayName = function() {
  console.log("Hi my name is " + this.name);
};

// provided code to test above constructor and method
var penguin = new Penguin("Captain Cook", 2);
penguin.sayName();
