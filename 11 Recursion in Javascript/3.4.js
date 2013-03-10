function growBeanstalk(years) {
  // Base case
  if (years <= 2) {
    return 1;
  }	
  // Recursive case
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);	
}

// Set the height of the beanstalk using your function
var height = growBeanstalk(30);

console.log(height);
