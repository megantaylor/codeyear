function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  guess = prompt(clue);
  // Convert their guess to a number using +
  guess = +guess;
  
  while (guess !== number) {
    if (guess < number) {
      guess = prompt("Too low. Guess again.");
    }
    else if (guess > number) {
      guess = prompt("Too high. Guess again.");
    }
    guess = +guess;
  }
  
  console.log("You got it! The number was " + number);
}
guessNumber(5,"Pick a number between 1 and 100.");