var power = function (base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

console.log(power(2, 6) === 36);
console.log(power(2, 2) === 4);
console.log(power(2, 4) === 16);