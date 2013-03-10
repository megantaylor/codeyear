function growBeanstalk(years) {
  if (years <= 0) {
    return 0;
  }
  else if (years <= 2) {
    return 1;
  }
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);
}

growBeanstalk(5);

// THE FOLLOWING IS NOT REAL JAVASCRIPT
// It is a visual guide to how values
// are stored in the stack.
1. growBeanstalk(5) {
    return growBeanstalk(4) + growBeanstalk(3);
2.   growBeanstalk(4) {
      return growBeanstalk(3) + growBeanstalk(2);
3.     growBeanstalk(3) {
        return growBeanstalk(2) + growBeanstalk(1);
4.       growBeanstalk(2) {
A=        return 1;
         };
5.       growBeanstalk(1) {
B=        return 1;
         };
C=      return 2; // (1 + 1)
       };
6.     growBeanstalk(2) {
D=      return 1;
       };
E=    return 3; // (2 + 1)
     };
7.   growBeanstalk(3) {
      return growBeanstalk(2) + growBeanstalk(1);
8.     growBeanstalk(2) {
F=      return 1;
       };
9.     growBeanstalk(1) {
G=      return 1;
       };
H=    return 2; // (1 + 1)
     };
I=  return 5; // (3 + 2)
   };
