// for the numbers 1 through 20,
for ( i=1; i<=20; i++) { 

  // if the number is divisible by 3 *and* 5, write "FizzBuzz" 
  if ( i % 5 === 0 && i % 3 === 0 ) { 
    console.log("FizzBuzz");
  // if the number is divisible by 3 write "Fizz" 
  } else if ( i % 3 === 0 ) {
    console.log("Fizz");
  // if the number is divisible by 5 write "Buzz" 
  } else if ( i % 5 === 0 ) {
    console.log("Buzz");
  // otherwise, write just the number
  } else {
    console.log(i);
  }
}
