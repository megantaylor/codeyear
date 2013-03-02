function Car( listedPrice ) {
    var price = listedPrice;
    this.speed = 0;
    this.numWheels = 4;
    
    this.getPrice = function() {
        return price;
    };
}

// Write the accelerate method for Car here.
Car.prototype.accelerate = function(){
    this.speed += 10;
};

