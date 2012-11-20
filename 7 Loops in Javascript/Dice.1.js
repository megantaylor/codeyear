// First we pick a random number between 1 and 6 for our roll of the die
var die1 = Math.floor(Math.random()*6 + 1);
var die2 = Math.floor(Math.random()*6 + 1);
var score;

/* This time we have two special cases.
 The first is if either die roll is 1 then score should be 0 
 and the second is if both dice are the same then it we 
 double their score    */

if(die1 === 1 || die2 === 1)
  score = 0;
else if(die1 === die2)
  score = (die1 + die2) * 2;
else
  score = die1 + die2;

console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);
