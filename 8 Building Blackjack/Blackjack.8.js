function Hand() {  
    var cards = [deal(), deal()];

    this.score = function(){
        return cards[0].getValue() + cards[1].getValue();
    };

    this.printScore = function(){
        return "[" + cards[0].getPrintedScore() + 
        "] [" + cards[1].getPrintedScore() + "]";
    };

    this.hitMe = function(){
        cards[cards.length] = deal();
    };
}

function Card(s, n) {  
    var suit = s;
    var number = n;

    this.getSuit = function(){
        return suit;
    };

    this.getNumber = function(){
        return number;
    };

    this.getValue = function(){
        if (number > 10){
            return 10;
        }
        else if (number === 1){
            return 11;
        }
        else {
            return number;
        }
    };

    this.getPrintedScore = function(){
        var numbers = [0, "Ace", "Two", "Three", "Four", 
        "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
        "Jack", "Queen", "King"];
        var suits = [0, "Hearts", "Diamonds", "Spades", "Clubs"];
        return numbers[number] + " of " + suits[suit];
    };
}

var deal = function(){  
    var randomSuit = Math.floor(Math.random() * 4 + 1);
    var randomNumber = Math.floor(Math.random() * 13 + 1);
    return new Card (randomSuit, randomNumber);
};

var player1 = new Hand();  
var player2 = new Hand();

console.log("...Shuffling...");  
console.log("Player 1: " + player1.printScore() + " = " + player1.score() + ".");  
console.log("Player 2: " + player2.printScore() + " = " + player2.score() + ".");

if(player1.score() > player2.score())  
console.log("----Player 1 wins!----");  
else if(player1.score() < player2.score())  
console.log("----Player 2 wins!----");  
else console.log("----It's a tie!----");  
