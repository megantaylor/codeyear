//Here is the original card object
var card1 = {"suit":"clubs", "rank": 8};

//Create a function called 'clone'. It should take one argument - namely
//the object to clone/copy. It should return a copy of that object
function clone(original) {
	var copy = {};
	for (var key in original) {
		copy[key] = original[key];
	}
	return copy;
}

//If your 'clone' method is correct, this code should create an 
//independent copy of card1's data in card2. In other words, changing
//the property of one object should NOT change it in the other
var card2 = clone(card1);

//Change the rank of the card2 variable to 3
card2.rank = 3;
//Log the value of the rank property of card1 to the console
console.log(card1.rank);
