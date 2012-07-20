// Our deal function will return one random card
function deal() {
    var card = Math.floor(Math.random ( ) * 52 + 1);
    return card;
}
// Declare our two variables card1 and card2
var card1 = deal();
var card2 = deal();
// Define a function called score, which will assign points by
// adding up the cards: 
function score() {
    return card1 + card2;
}

console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());
