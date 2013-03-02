//Create an object called FizzBuzzPlus
FizzBuzzPlus = {
isFizzBuzzie: function(num){
if(((num % 3 === 0) && (num % 5 !== 0 )) || ((num % 3 !== 0) && (num % 5 === 0 ))){
return true;
}else{
return false;
}
},
getFizzBuzzSum: function(start){
var buzzSum = 0;
for(i = 0; i < start; i++){
if(this.isFizzBuzzie(i)){
buzzSum += i;
}else{
buzzSum += 0;
}
}
return buzzSum;
},
getFizzBuzzCount: function(start){
var buzzSum = 0;
for(i = 0; i < start; i++){
if(this.isFizzBuzzie(i)){
buzzSum += 1;
}else{
buzzSum += 0;
}
}
return buzzSum;
},
getFizzBuzzAverage: function(start){
var sum = this.getFizzBuzzSum(start);
var count = this.getFizzBuzzCount(start);
return sum/count;
}
};
console.log(FizzBuzzPlus.getFizzBuzzAverage(100));