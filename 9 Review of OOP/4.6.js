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
   var price = listedPrice;
   this.electricity = 100;
}
ElectricCar.prototype = new Car();

// Write the accelerate method for ElectricCar here
ElectricCar.prototype.accelerate = function() {
   this.speed += 20;
};

// Write the decelerate method for ElectricCar here
ElectricCar.prototype.decelerate = function(secondsStepped) {
   this.speed -= 5 * secondsStepped;
};

myElectricCar = new ElectricCar(500);

myElectricCar.accelerate();
console.log("myElectricCar has speed " + myElectricCar.speed);
myElectricCar.decelerate(3);
console.log("myElectricCar has speed " + myElectricCar.speed);
