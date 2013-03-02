//bad! This should be inside an object. We'll fix that a bit later
var change = 0; 

function howManyCoins (coinName, coinAmount, coinsSoFar) {

    if (change < coinAmount) {
        console.log(coinsSoFar + " " + coinName);
    } else {
        change -= coinAmount;
        howManyCoins(coinName, coinAmount, coinsSoFar + 1);
    }
}

var currency = [5.00, 1.00, 0.25, 0.10, 0.01];
var coinNames = ["five dollar bills", "one dollar bills", "quarters", "dimes", "pennies"];

function makeChange (coinNames, currency, index) {
    if (index < currency.length) {
        howManyCoins(coinNames[index],currency[index],0);
        makeChange(coinNames, currency,index+1);
    } else {
        return;
    }
}

change = 18.94;
makeChange(coinNames, currency, 0);

