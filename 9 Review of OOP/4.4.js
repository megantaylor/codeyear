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
}
ElectricCar.prototype = new Car();

myElectricCar = new ElectricCar(500);

console.log("myElectricCar has speed " + myElectricCar.speed);

// Print out myElectricCar's number of wheels
console.log("myElectricCar has numWheels " + myElectricCar.speed);
