var yourJob = "pooper scooper";
var dominantHand = "right";
var result;

//Line 10 starts an if statement
//Nested in this if statement is an if else statement on lines 11 - 15
//This nested if else statement allows us to check another condition
//We close the first if statement at the start of line 16

if (yourJob.length > 0 && dominantHand.length > 0) {
  if (dominantHand === "right" || dominantHand === "left") {
    result = "Thanks";
  } else {
	result = "Please enter right or left for dominantHand.";
  }
} else {
  result = "Please tell us both your job and your dominant hand.";
}
