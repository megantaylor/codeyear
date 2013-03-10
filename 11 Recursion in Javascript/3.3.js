function guessNumber(number) {  
  // Prompt the user for a number
  guess = prompt("Guess a number between 1 and 100");

  // Convert their guess to a number using +
  guess = +guess;

  // Define base case
  if (guess === number) {
    return console.log("You got it! The number was " + number);
  }else if(guess > 100 || guess < 0){
    console.log("Number must be 1-100");
    guessNumber(number);
  }else if(guess > number){
    console.log("Your guess: "+guess+" is Higher! Try again!");
    guessNumber(number);
  }else if(guess < number){
    console.log("Your guess: "+guess+" is lower! Try again!");
    guessNumber(number);
  }
  // Define recursive case with a function call

}

// Call the function guessNumber() with an integer for an argument
guessNumber(77);
