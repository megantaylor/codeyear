//array 1: the suits
var suits = ["clubs","hearts","diamonds","spades"];

//array 2: the ranks
var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

//using for loops, modify the "deck" array so that it becomes a 
//two-dimensional array that stores every card in the deck; 
//e.g. [1, "clubs"], [2, "clubs"],etc...["A", "spades"]
var deck = [];

for (var i = 0; i < suits.length; i++) {
	for (var j = 0; j < ranks.length; j++) {
		var cardArray = [suits[i],ranks[j]];
		deck.push(cardArray);
	}
}
