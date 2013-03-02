var change = 0;
function howManyQuarters(howMuchMoney) {
    //fill this in
    if (howMuchMoney < 0.25) { change = howMuchMoney; return 0;
    } else { return this.howManyQuarters(howMuchMoney - 0.25)+1; }
}
change = 0.99;
console.log ("Pay out " + howManyQuarters(change) + " quarters");
console.log ("And you'll have " + change * 100 + " pennies left over");
