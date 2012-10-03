// Define substring here
substring = function(input,start,end){
	var subset = "";
	var i;
	for (i = start; i <= end; i++) {
		subset = subset += input[i];
	}
	return subset;
};

// Write test here:
// Call substring, passing "lorem ipsum dolor" to `input`, `6` to 
// `start`, and `10` to `end`.
console.log(substring("lorem ipsum dolor", 6, 10));
