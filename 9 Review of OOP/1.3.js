function Bike( color, numGears ) {
    this.color = color;
    this.numGears = numGears;
    this.numWheels = 2;
}

var myBike = new Bike('blue',6);

console.log("myBike is "+myBike.color+" and has "+myBike.numGears+" gears");
