function BankAccount( lastname ) {
    this.lastname = lastname;
    this.balance = 1000000;    
}

// write your function here
function attackBalance(account) {
	this.BankAccount = account;
	account.balance = 5;
}

var jonesBankAccount = new BankAccount ("Jones");

console.log("jonesBankAccount has " + jonesBankAccount.balance + " dollars!");
attackBalance(jonesBankAccount);
console.log("After attack, jonesBankAccount has " + jonesBankAccount.balance + " dollars!");
