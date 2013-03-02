function Bike( color, numGears ) {
    this.color = color;
    this.numGears = numGears;
    this.numWheels = 2;
    
    this.ride = function() {
        console.log("I'm riding!");
    };
    //put paintRed method here!
    this.paintRed = function() {
    	this.color = 'red';
    };
}

var myBike = new Bike("Blue", 6);

myBike.ride();

myBike.paintRed();
