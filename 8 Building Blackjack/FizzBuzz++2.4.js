//Create an object called FizzBuzzPlus
var FizzBuzzPlus={
	isFizzBuzzie: function(x){
    	if (((x%3===0)||(x%5===0)) && !((x%3===0)&&(x%5===0))) {return true;}
    	else {return false;}
	}
	getFizzbuzzSum: function(num){
        this.isFizzBuzzie = num;
        var sum = 0;
        for(var i=0;i<=100;i++){
            if(num)
                sum += num;
        }
        return sum;
    }


};
//create the following functions:

// isFizzBuzzie
// return true if the provided value is
// a multiple of 3 or 5 but not both 3 and 5.
// otherwise it returns false
// arguments: number - integer
// returns: true or false - boolean 

//getFizzBuzzSum
//returns the sum of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - sum of the numbers below the maximum which are multiples of 3 or 5 but not both

//getFizzBuzzCount
//returns the count of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - count of the numbers below the maximum whihch are multiples of 3 or 5 but not both

//getFizzBuzzAverage
//returns the average(sum/count) of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - average(sum/count) of the numbers below the maximum whihch are multiples of 3 or 5 but not both

