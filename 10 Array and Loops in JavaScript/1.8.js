//Here's our suits array
var suits = ["hearts","clubs","diamonds","spades"];

//First, make a copy of the suits array and assign it to
//a variable named "otherSuits"
var otherSuits = suits.slice();

//Next, change the first item in the otherSuits array
//to be "Brooks Brothers"
otherSuits[0] = 'Brooks Brothers';

//Finally, log out the first item in both arrays. Note that the values
//are different. Success!
console.log(suits[0], otherSuits[0]);
