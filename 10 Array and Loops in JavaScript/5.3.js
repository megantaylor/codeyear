//here's our players array from exercise 1
var players = [];
players[0] = {'name': 'Robert', hand: []};
players[1] = {'name': 'Joe', hand: []};

//here's our code to create the deck
var suits = ['clubs','diamonds','hearts','spades'];
var ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
var deck = [];
for (var i=0;i<suits.length;i++) {
    for (var j=0;j<ranks.length;j++) {
        var card = {'rank': ranks[j], 'suit':suits[i]};
        deck.push(card);
    }
}

//This will shuffle the deck. Nothing for you to do here. Just here to 
//make the final output a little more realistic
deck.sort(function() {return 0.5 - Math.random();});

//Deal 5 cards to each player. Make sure you deal them out 
//one player at a time, just like in a real poker game.
var c = 0;
for (var i = 0; i<5; i++) {
	for (var p = 0; p<players.length; p++) {
		var card = deck[c];
		players[p].hand.push(card);
		c++;
	}
}
