var containsOne = 0;
var totalCombos = 0;
var probability;

//Here we walk through all possible outcomes of two 6 sided die
for(i = 1; i < 7; i++ ){
  
  for(y = 1; y < 7; y++ ){
  
	if (i === 1 || y === 1){
		containsOne++;
	}
	totalCombos++;
}
}
//Now find what the probability was

probability = containsOne / totalCombos;

console.log("The probability of rolling a 1 is " + probability+
           " or "+containsOne+"/"+totalCombos);
