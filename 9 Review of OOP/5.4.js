var str1 = "It was the best of times";
var str2 = "It was the worst of times";

// extend String's prototype here
String.prototype.futureDickens = function(){
  return this.replace("was","will be") ;
};

console.log( str1.futureDickens() );
console.log( str2.futureDickens() );
