//Define the function with two parameters
//Declare the variables fixedCosts and variableCosts

var calculateTotalCosts = function (salary, numWorkers) {
var fixedCosts = 5000;
var variableCosts = salary * numWorkers;
return fixedCosts + variableCosts;
};
  
calculateTotalCosts ( 20, 5);
