function makeRobots(robotsNeeded){
  // Do we need any robots?
  if(robotsNeeded>0){
      
    // We do?  Well lets make one
    console.log("Robot "+ robotsNeeded+" Created");
    
    // Removes 1 from robots Needed
    // Also the same as saying robotsNeeded = robotsNeeded -1
    robotsNeeded--;
    
    // Calls makeRobots with the new number of robots needed
    makeRobots(robotsNeeded);
  }
}
makeRobots(2);
