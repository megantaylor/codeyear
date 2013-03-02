function BankAccount( lastname ) {
    this.lastname = lastname;
     var balance = 1000000;
}

function attackBalance(account) {
    (account.balance === undefined) ? console.log("Can't attack") : account.balance = 5;
}

var safeAccount = new BankAccount("user");

attackBalance(safeAccount);
