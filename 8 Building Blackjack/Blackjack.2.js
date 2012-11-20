// make a Card constructor here.  It should take two parameters 
// representing the suit and number of the card to be created
function Card(suit, number) {
this.suit = suit;
this.number = number;
this.getSuit = function () {
return this.suit;
};
this.getNumber = function () {
return this.number;
};
}