// change our card constructor to make suit and number private
function Card(s, n) {
    var suit = s;
    var number = n;
}

// let's say someone is initially dealt bad cards
var card1 = new Card(2, 7);
var card2 = new Card(3, 6);

// but they have figured out a way to cheat our system!
function cheat() {
    if(card1.hasOwnProperty("number")) {
        console.log("I first have a "+card1.number+" and a "+card2.number);
        card1.number = 13;
        card2.number = 1;
        console.log("haha now I have blackjack!");
    }
}

cheat();