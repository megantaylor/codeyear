var setName = function(yourName){
    this.name = "Your name is " + yourName;
};

// create an object called `human`
var human = new Object();
human.setHumanName = function(yourName){
		this.name = "Your name is " + yourName;
	};

// now call human.setHumanName
human.setHumanName("megan");

// check to see that your method works by printing
// human.name to the console
console.log(human.name);

//var human = {
//    setHumanName: function(yourName){
//		this.name = "Your name is " + yourName;
//	}
//};
