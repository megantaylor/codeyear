var result = "";

var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

// Rewrite the strings in win, lose, and draw so they contain
// complete sentences stating the result.

var win = "Your " + player + " beats " + computer + ". You win.";
var lose = "Your " + player + " loses to " + computer + ". You lose.";
var draw = "A draw: " + player + " on " + computer + ".";

if(player === "rock"){
    if(computer === "scissors"){
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

// We won't need these anymore, so they've been removed for you.
/*
console.log(player);
console.log(computer);
*/

console.log(result);

