// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
    var suit = s;
    var number = n;
    this.getValue = function() {
		if (number === 1) { return 11; }
		else if (number < 11) { return number; }
        else { return 10; } // num = 11, 12, 13
    };
}

var Hand = function() {
    this.card1 = deal();
    this.card2 = deal();
    this.score = function() {
		return this.card1.getValue() + this.card2.getValue();
    };
};

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function() {
    deal_suit = Math.floor(Math.random() *4 +1);
    deal_num = Math.floor(Math.random() *13 +1);
    return new Card(deal_suit, deal_num);
};

// examples of the deal function in action
//var card1 = deal();
//var card2 = deal();
var myHand = new Hand(); var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());

if(yourHand.score() > myHand.score()) console.log("you win!"); else if(yourHand.score() < myHand.score()) console.log("I win!"); else console.log("We tied!");