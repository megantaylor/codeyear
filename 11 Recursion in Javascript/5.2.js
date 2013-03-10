// Write a function to get the factorial of a number.
var factorial = function(int) {
	if (int < 0) {
		return console.log("Error!");
	}
	else if (int === 0) {
	return 1;
	}	
	else {
		return int * factorial(int - 1);
	}
};