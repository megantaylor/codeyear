// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
    var suit = s;
    var number = n;
}

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function() {
    return new Card(Math.floor(Math.random() * 4 + 1), 
                    Math.floor(Math.random() * 13 + 1));
};

// examples of the deal function in action
var card1 = deal();
var card2 = deal();