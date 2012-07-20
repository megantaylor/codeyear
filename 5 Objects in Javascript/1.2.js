// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[5] % 8 !== 0;
