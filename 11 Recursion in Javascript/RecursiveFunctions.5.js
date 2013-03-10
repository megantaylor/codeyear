// DEALING CARDS
var miniDeck = new Array("ace","king","queen","jack",10,9,8,7,6,5,4,3,2);

function deal(numberOfCards){
    // If number of cards is greater than 0
    if( numberOfCards > 0){
	    // store random number between 0
        // and the total number of cards in the miniDeck
		randomNumber = Math.floor(Math.random()*miniDeck.length); 
		// output card selected
		console.log("Your card is " + randomNumber);
		// remove selected card from deck
		miniDeck.splice(randomNumber,1);
		// remove from numberOfCards
		numberOfCards --;
		// recursively call the function
        deal(numberOfCards);
	}
}
// Call the function and pass the number of cards you want to deal
deal(5);
