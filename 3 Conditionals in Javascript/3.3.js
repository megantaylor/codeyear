// Define the function under this line
canIDrive = function(myAge, legalDrivingAge) {
    if (myAge >= legalDrivingAge) {
        return true;
    }
    else {
        return false;
    }
};

// Declare legalDrivingAge under myAge
var myAge = prompt("How old are you?");
var legalDrivingAge = 18;
//Create an if else statement using the function as a condition
if ( canIDrive === true ) {
  console.log("You can legally drive!");
}
else {
  console.log("You'll have to wait a few more years!");
}

