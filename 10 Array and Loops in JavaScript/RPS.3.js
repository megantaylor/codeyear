//We don't need to prompt the human player right now.
/*
var player = prompt("Pick rock, paper, or scissors.");
*/

// Declare a variable "choices" that contains the three choices as
// separate strings.
var choices = ["rock", "paper", "scissors"];


// Declare a variable "computer" that selects one of the strings from
// "choices" at random. Use the random number generated by
// Math.floor(Math.random()*3)
var computer = choices[Math.floor(Math.random()*3)];

// We'll turn this one off for the moment.
/*
console.log("You picked "+player+".");
*/

// Print the computer's choice to the console.
console.log("The computer picked " + computer + ".");
