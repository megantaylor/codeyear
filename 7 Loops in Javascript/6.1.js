function countUp(current) {
    // Recursive case
    if (current < 5) {
        console.log(current);
        
        // We're continuing the loop by calling countUp and passing
        // information about which step we're on through the argument.
        // The `current + 1` is like the `i++` code in a `for` loop.
        countUp(current + 1);
    }
    
    // Base case
    if (current === 5){
        console.log(current);
        
        // This is the last step.  We stop the loop by *not* calling 
        // `countUp` from here.
    }
}

// We start the loop by calling the function.
countUp(1);

