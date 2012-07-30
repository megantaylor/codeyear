var isQualified = function(averageTime) {
  if ( averageTime >= 11.5 ) {
    console.log("Close, but you didn't make the cut.");
  } else {
    console.log("Welcome to the team, speedy!");
  }
};

isQualified(11.3);
isQualified(12.1);
