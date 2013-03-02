//use the length method of the array to get the suit of the last card 
//in this 2D array
var cards = [ ["A", "hearts"],  [3, "clubs"] ];

//first get the last item in the cards array
var lastCard = cards[cards.length - 1];

//then get the suit (which is the last item) in the lastCard array
var lastSuit = lastCard[1];
