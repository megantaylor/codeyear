// 1. prompt for name
var runner = prompt("What is your name?");
// 2. write condition to ensure runner is not empty
    if ( runner.length > 0 ) { 
	  console.log("Welcome to the Olympic tryouts, " + runner);
  } else {
	  console.log("Name cannot be blank.");
  }
