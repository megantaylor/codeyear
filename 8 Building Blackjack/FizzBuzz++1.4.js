    var MathObject = {
    val: 42,
    
    setVal: function(newVal){
        this.val = newVal;
    },
    getVal: function(){
        return this.val;
    },
    getSqrVal: function(){
        this.val = this.val * this.val;
        return this.val;
    },
    getValplusplus: function(){
        this.val++;
        return this.val;
    },
    getValplusN: function(n){
		this.val = n + this.val;
		return this.val; 
    }
};