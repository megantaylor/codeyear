// Accepts a number x as input and returns its square
var square = function(x) {
  return x * x;
};

// Accepts a number x as input and returns its cube
var cube = function(x) {
  return x * square(x);
};

cube(7);