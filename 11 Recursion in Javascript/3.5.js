function growBeanstalk(years) {
  if (years <= 0) {
    return 0;
  }
  else if (years <= 2) {
    return 1;
  }
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);
}

console.log(growBeanstalk(5));


// THE FOLLOWING IS NOT REAL JAVASCRIPT
// It is just an illustration of the control flow
// in a recursive function.
1. growBeanstalk(5) {
    return growBeanstalk(4) + growBeanstalk(3);
2.   growBeanstalk(4) {
      return growBeanstalk(3) + growBeanstalk(2);
3.     growBeanstalk(3) {
        return growBeanstalk(2) + growBeanstalk(1);
4.       growBeanstalk(2) {
          return 1;
         };
5.       growBeanstalk(1) {
          return 1;
         };
        return 2; // (1 + 1)
       };
6.     growBeanstalk(2) {
        return 1;
       };
     return 3; // (2 + 1)
    };
7.  growBeanstalk(3) {
     return growBeanstalk(2) + growBeanstalk(1);
8.     growBeanstalk(2) {
        return 1;
       };
9.     growBeanstalk(1) {
        return 1;
       };
     return 2; // (1 + 1)
    };
   return 5; // (3 + 2)
  };
