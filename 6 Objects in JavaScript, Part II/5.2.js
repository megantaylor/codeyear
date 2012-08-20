function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person 
var john = new Person('John','Smith',30);

// try to print his bankBalance
console.log(john.bankBalance);
