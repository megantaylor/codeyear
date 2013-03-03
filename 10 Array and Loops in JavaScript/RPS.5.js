var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

if(player === "rock"){
    // Nest your if statements here:
    if (computer === "paper") {
    	
    } else if (computer === "rock") {
    	
    } else if (computer === "scissors") {
    	
    }
}
else if(player === "paper"){
    // And here:
        if (computer === "paper") {
    	
    } else if (computer === "rock") {
    	
    } else if (computer === "scissors") {
    	
    }
}
else if(player === "scissors"){
    // And three more:
        if (computer === "paper") {
    	
    } else if (computer === "rock") {
    	
    } else if (computer === "scissors") {
    	
    }
}

console.log("You picked "+player+".");
console.log("The computer picked "+computer+".");
