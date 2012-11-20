var newArray = [];

// Here I filled the spots in the newArray with 0s so we can
// count their occurrences in the loops below

for(i=2; i<=12;i++)
    newArray[i] = 0;
    
for(i = 1; i < 7; i++ ){
  
  for(y = 1; y < 7; y++ ){
	newArray[i+y]++;
  }
}

//Now we print out the probability of each occuance
//to verify we did it correctly
for(i=2; i<=12;i++)
    console.log("The roll "+i+" has a "+newArray[i]+" in 36 chance");
