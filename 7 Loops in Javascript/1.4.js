var australia = {
    hemisphere: "southern",
    population: function(newArrivals) {
        return 20000000 + newArrivals;
    }
};

var australia2 = new Object();
australia2.hemisphere = "southern";
australia2.population = function(newArrivals){
    return 20000000 + newArrivals;
};

// create your objects and methods here
var me = {
    planet: "Earth",
    age: function(yearBorn) {
		return 2012 - yearBorn;
    }
};

var jeremyLin = new Object();
jeremyLin.team = "Knicks";
jeremyLin.playGame = function(opponent){
    return "Tonight the Knicks square off against the " + opponent;
};
