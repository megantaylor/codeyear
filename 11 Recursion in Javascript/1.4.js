function multiplyBy10(number) {
  console.log(number * 10);
}

function multiplesOf10(limit) {
  // Put your for loop here
  for (i = 1; i <= limit; i++) {
  multiplyBy10(i);
  }
}

// Call the function multiplesOf10() on any integer
multiplesOf10(5);
