function Car( listedPrice, color ) {
    var price = listedPrice;
    this.color = color;
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
    
    this.getPrice = function() {
        return price;
    };
}

var blueCar = new Car( 1000, "blue");

console.log("The price of blueCar is " + blueCar.getPrice()); // finish me!
