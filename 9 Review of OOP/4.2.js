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

// Write ElectricCar class here
ElectricCar.prototype = new Car();
function ElectricCar(listedPrice){
	var price = listedPrice;
	this.getPrice = function() {
		return price;
	};
}
