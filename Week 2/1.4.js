var fullName = "";
var name;
var firstLetter;
/*
   fixName function definition should go here.
*/
var fixName = function() { firstLetter = name.substring(0, 1);
name = firstLetter.toUpperCase() + name.substring(1);
                          fullName = fullName + " " + name;};

name = prompt("Enter your first name (all in lower case):");

fixName();

name = prompt("Enter your second name (all in lower case):");

fixName();

console.log("And your full name is:" + fullName);
