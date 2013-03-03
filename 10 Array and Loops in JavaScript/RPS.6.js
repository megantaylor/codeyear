var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

// Declare a variable 'result' with an empty string.
var result = "";

// Declare three variables: 'win', 'lose', and 'draw' with strings that
// say "You win.", "You lose." and "A draw."
var win = "You win.";
var lose = "You lose.";
var draw = "A draw.";

if(player === "rock"){
    if(computer === "scissors"){
        // Give the results!
        result = win;
    }
    else if(computer === "paper"){
        result = lose;
    }
    else if(computer === "rock"){
        result = draw;
    }
}
else if(player === "paper"){
    if(computer === "rock"){
        result = win;
    }
    else if(computer === "scissors"){
        result = lose;
    }
    else if(computer === "paper"){
        result = draw;
    }
}
else if(player === "scissors"){
    if(computer === "paper"){
        result = win;
    }
    else if(computer === "rock"){
        result = lose;
    }
    else if(computer === "scissors"){
        result = draw;
    }
}

console.log("You picked "+player+".");
console.log("The computer picked "+computer+".");
// Print the result!
console.log(result);

