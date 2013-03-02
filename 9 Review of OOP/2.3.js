function RedCar( price ) {
    this.price = price;
    this.color = "red";
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

//create BlueCar object 


var oldBlue = new BlueCar(100);

oldBlue.honk();
