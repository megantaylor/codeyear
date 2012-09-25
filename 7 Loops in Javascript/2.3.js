// we set up a base class
function Candy() {
    this.sweet = true;
}

// create a "Chocolate" class with a "type" argument
function Chocolate(type) {
    this.type = type;
}

// say that Chocolate inherits from Candy
Chocolate.prototype = new Candy();

// create a "choc" object using the Chocolate constructor 
// that has a "type" of "milk"
var choc = new Chocolate("milk");

// print the sweet and type properties of choc
console.log( choc.sweet );
console.log( choc.type );
