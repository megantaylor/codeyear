function Car( listedPrice ) {
var price = listedPrice;
this.speed = 0;
this.numWheels = 4;

this.getPrice = function() {
return price;
};
}

Car.prototype.accelerate = function() {
this.speed += 10;
};

function ElectricCar( listedPrice ) {
// add an 'electricity' property to this class
this.electricity = 100;
var price = listedPrice;
}

ElectricCar.prototype = new Car();

// Add refuel method here:
ElectricCar.prototype.refuel = function( numHours ) {
this.electricity += numHours * 5;
return this.electricity;
};

myElectricCar = new ElectricCar(500);
