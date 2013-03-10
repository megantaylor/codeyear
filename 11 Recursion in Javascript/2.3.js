function factorial(n) {
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    console.log("No negative numbers!");
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  return n * factorial(n -1);
}

factorial(-1);
factorial(5);
