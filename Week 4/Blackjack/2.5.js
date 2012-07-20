// Our deal function will return a random card
function deal() {
    card = Math.floor(Math.random()*52+1);
    return card;
}
// Deal out our first hand by declaring variables card1 and card2
var card1 = deal();
var card2 = deal();
// Define a function getValue that returns the remainder when card
// is divided by 13
function getValue(card) {
    return card % 13;
}
// Return the score of our hand
var score = function () {
    return getValue(card1) + getValue(card2);
};
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());
