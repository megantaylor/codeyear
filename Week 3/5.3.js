var name = prompt("What is your name?");
//Original if else statement
if (name === "Nick") {
  result = true;
} else {
  result = false;  
}
//Rewrite the above code using the ternary operator
result = name === "Nick" ? true : false;
