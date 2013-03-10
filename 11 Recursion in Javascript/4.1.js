// Create an empty array called "stack"
var stack = [];
// Here is our recursive function
function power(base, exponent) {
  // Base case 
  if ( exponent === 0 ) {
    return 1;
  }
  // Recursive case
  else {
	stack[exponent - 1] = base * power(base, exponent - 1);
    return stack[exponent - 1];
  }
}