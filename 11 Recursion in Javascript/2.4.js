function factorial(n) {
  // Termination condition to prevent infinite recursion
  if (n < 0) {
    console.log("Can't make a factorial from a negative number.");
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // What's wrong with this picture? Why won't this recursion work?
  return n * factorial(n - 1);
}

factorial(6);
