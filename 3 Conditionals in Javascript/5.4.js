var food = prompt("What kind of food do you like?");

if (food === "taco") {
  foodType = "Mexican";
} else {
  foodType = "other";  
}

//Re-write the above code using a ternary operator
foodType = food === "taco" ? "Mexican" : "other";
