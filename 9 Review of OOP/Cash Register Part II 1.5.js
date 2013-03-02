function howManyCoins (coinName, coinAmount, coinsSoFar) {
    //fill this in
    if (change < coinAmount) { console.log(coinsSoFar + " " + coinName); }
    else { change -= coinAmount; return this.howManyCoins(coinName, coinAmount, coinsSoFar +1);}
}
change = 4.94;
console.log("Give them:");
howManyCoins("dollar bills", 1.00, 0);
howManyCoins("quarters", 0.25, 0);
howManyCoins("dimes", 0.10, 0);
howManyCoins("nickels", 0.05, 0);
howManyCoins("pennies", 0.01, 0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));
