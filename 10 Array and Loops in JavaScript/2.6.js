//given this multi-dimensional array
var teams = [ ["robert","joe"], ["martin", "sharon"] ];

//first, remove "sharon" from team 2 using splice
teams[1].splice(2,1);
//then, remove the first team from the teams array using splice
teams.splice(0,1);
