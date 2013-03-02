function RedCar( price ) {
    this.price = price;
    this.color = "red";
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

//create BlueCar object 
function BlueCar(price){
	this.price = price;
	this.color = "blue";
	
	this.honk = function() {
		console.log("BLARE!");
	};
}

var oldBlue = new BlueCar(100);

oldBlue.honk();
