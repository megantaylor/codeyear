function Bike( color, numGears ) {
    this.color = color;
    this.numGears = numGears;
    this.numWheels = 2;
    
    this.ride = function() {
        console.log("I'm riding!");
    }
    this.paintRed = function() {
        this.color = "red";
    }
    
}

var myBike = new Bike("Blue", 6);

myBike.paintRed();

console.log("myBike has " + myBike.numGears + " gears and is now " + myBike.color);
