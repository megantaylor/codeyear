function evenOrOdd(total){
  if(total >= 0){
    if(total % 2 === 0){
	  console.log("The number " + total + " is even");
	}else{
      console.log("The number " + total + " is odd");
	}
	// remove from total
	total -= 1;
	// recursively call the function
	evenOrOdd(total);
  }
}
evenOrOdd(6);

