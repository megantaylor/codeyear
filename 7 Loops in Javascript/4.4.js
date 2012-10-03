// Define substring here
substring = function(input,start,end){
	var i;
	for (i = start; i <= end; i++) {
		console.log(input[i]);
	}
};

// Write test here:
// Call substring, passing "lorem ipsum dolor" to `input`, `6` to 
// `start`, and `10` to `end`.
substring("lorem ipsum dolor",6,10);
