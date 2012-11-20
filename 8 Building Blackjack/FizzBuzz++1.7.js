var comedy = {
	irony: function() {
		print("Hi!");
	},
	schadenfreude: function(){
		print("Bye!");
	},
	slapstick:  function(s){
		if (s === "Murdoch" || s === "Gates") {
			return "Pie!";
		}
		else if (s === "Hollande"){
			return "Flour";
		}
		else { return "Make Up!";}
	}
};
