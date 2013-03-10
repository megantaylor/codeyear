// Here is the function using a for loop
function countSheepWithLoop(number) {    
  for (i = 1; i <= number; i++) {
    if (i === number) {
      console.log("Zzzzzz");
    }
    console.log("Another sheep jumps over the fence.");
  }
}

// And here is the recursive function
function countSheep(number) {
  if (number === 0) {
    // Put your base case here
    console.log("Zzzzzz");
  } else {
	console.log("Another sheep jumps over the fence.");
	// Define the variable newNumber as 
	// 1 less than the input variable number
	newNumber = number - 1;
	// Recursively call the function
	// with newNumber as the parameter
	countSheep(newNumber);
  }
}

// Call your new recursive function:
countSheep(5);
