function loopFactorial(n) {
  var result = n;
  while (n > 1) {
    result = result * (n-1);
    n--;
  }
  return result;
}

function recursiveFactorial(n) {
  if (n < 0) {
    return console.log("Must be a positive integer.");
  }
  else if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

var loopResult = loopFactorial(5); // Call the function loopFactorial(n)
var recursiveResult = recursiveFactorial(5); // Call the function recursiveFactorial(n)

console.log("The loop function returned: " + loopResult);
console.log("The recursive function returned: " + recursiveResult);
