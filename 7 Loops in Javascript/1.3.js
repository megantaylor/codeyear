var australia = {
    weather: "superb",
    people: "not many of them but they're all great!",
    tourism: "a wonderful place to holiday. please visit!"
};

var jordan = new Object();
jordan.weather = "hot. but so are the people!";
jordan.people = "see above!";
jordan.tourism = "Codecademy's dream team retreat!";

// print australia's weather using dot notation
console.log(australia.weather);

// create a new variable "property" and set it to the string "weather"
var property = "weather";

console.log(jordan[property]);

// now modify "property" to be the string "people"
var property = "people";

console.log(jordan[property]);
