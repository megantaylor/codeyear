var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

var whatThen;
// Write the first level of your conditional here.
if (player === "rock") {
	whatThen = "rocked";
} else if (player === "paper") {
	whatThen = "papered";
} else if (player === "scissors") {
	whatThen = "scissored";
}

console.log(whatThen);
/*
console.log("You picked "+player+".");
console.log("The computer picked "+computer+".");
*/
