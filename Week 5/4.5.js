function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  this.calcArea = function() {
      return this.length * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
  return this.length * 2 + this.width * 2;
};
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();