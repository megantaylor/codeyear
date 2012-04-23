var number = prompt("Guess what number I'm thinking of between 1 and 10!");
if(number === "7") {
  console.log("You got it!");
// Change the following line.
} else if (number === "6") {
  console.log("Close! Try guessing a little higher.");
} else {
  console.log("You were way off! Sorry...");
}