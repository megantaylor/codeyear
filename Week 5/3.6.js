var rectangle = new Object();
rectangle.length = 3;
rectangle.width = 4;
// here is our method to set the length
rectangle.setLength = function (newLength) {
  this.length = newLength;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
  this.width = newWidth;
};
// here change the width to 8 and length to 6 using our new methods
 rectangle.setLength(6);
 rectangle.setWidth(8);