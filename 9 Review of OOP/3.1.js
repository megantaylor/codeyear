function Car( listedPrice, color ) {
    this.price = listedPrice;
    this.color = color;
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

var blueCar = new Car( 1000, "blue");

console.log("The price of blueCar is " + blueCar.price );
