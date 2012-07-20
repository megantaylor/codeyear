function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
        this.perimeter = function () {
        return Math.PI * this.radius * 2;
        
    };
}


