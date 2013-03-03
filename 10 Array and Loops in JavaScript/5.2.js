var deck = [];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

for (var i=0;i<suits.length;i++) {
for (var j=0;j<ranks.length;j++) {
var card = {'rank': ranks[j], 'suit':suits[i]};
deck.push(card);
}
}
