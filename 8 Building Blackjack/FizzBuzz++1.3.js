// Here is our person object
    var person = {
        //giggle
        //returns: 'giggle'
        giggle: function(){
            return "giggle";
        },
        //giggles
        //parameters: n - number of giggles
        //returns: string of giggles of n giggles long
        giggles: function(n){
            if (n>1)
                return this.giggle() + " " + this.giggles(n-1);
            if (n===1)
                return this.giggle();
        },
        fiveGiggles: function() {
			return this.giggles(5);
        }

    };
    //console.log(person.giggle());
    console.log(person.fiveGiggles());