function RedCar( price ) {
    this.price = price;
    this.color = "red";
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

function BlueCar( price ) {
    this.price = price;
    this.color = "blue";
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

//Create a Car object here
function Car(price,color) {
	this.price = price;
	this.color = color;
}
