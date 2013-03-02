function Car( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;
   
   this.getPrice = function() {
       return price;
   };
}

Car.prototype.accelerate = function() {
   this.speed += 10;
};

function ElectricCar( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;
   
   this.getPrice = function() {
       return price;
   };
}

ElectricCar.prototype = new Car();

myElectricCar = new ElectricCar(500);

console.log(myElectricCar instanceof Car);
