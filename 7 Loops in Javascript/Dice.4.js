var isDouble = 0;
var totalCombos = 0;
var probability;

//Here we walk through all possible outcomes of two 6 sided die
for(i = 1; i < 7; i++ ){
  
  for(y = 1; y < 7; y++ ){
  
	if (i ===  y){
		isDouble++;
	}
	totalCombos++;
}
}
//Now find what the probability was

probability = isDouble / totalCombos;

console.log("The probability of rolling a 1 is " + probability+
           " or "+isDouble+"/"+totalCombos);
