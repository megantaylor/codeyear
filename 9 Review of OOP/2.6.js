function Car( price, color ) {
    this.price = price;
    this.color = color;
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

var blueCar = new Car( 1000, "blue");

// Make an object for the red car here.


console.log("My redCar is " + redCar.color);

