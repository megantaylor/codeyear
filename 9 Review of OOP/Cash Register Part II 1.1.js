var cashRegisterWithChange = {
    total: 0,
    setTotal: function (amount) {
        this.total = amount;
    },
    getPaid: function (amountPaid) {
        //fill this in
        if (amountPaid < this.total) {
        console.log("Not enough!");
        } else {
        var change = (amountPaid - this.total) * 100;
        change = change.toFixed(0);
        console.log(change + " pennies");
        }
	}
};

//some tests - you should see the following output:
//  Not enough!
//  45 pennies
cashRegisterWithChange.setTotal(2.55);
cashRegisterWithChange.getPaid(2);
cashRegisterWithChange.getPaid(3);
