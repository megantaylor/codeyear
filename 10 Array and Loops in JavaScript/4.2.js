var hand = [];
hand = [{"rank": 8, "suit": "clubs"}, 
{"rank": "A", "suit": "spades"}, 
{"rank": 2, "suit": "hearts"}, 
{"rank": "K", "suit": "hearts"}, 
{"rank": 9, "suit": "clubs"}];

for(var card in hand){
console.log(hand[card].suit + " " + hand[card].rank);
}
