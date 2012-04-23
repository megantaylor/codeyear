var cube = function(x) {
  return x * x * x;
}

// The cube function works fine with a number
console.log(cube(5));

// But if it is called with a string, it receives NaN
console.log(cube("test"));