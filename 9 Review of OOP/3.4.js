function BankAccount( lastname ) {
    this.lastname = lastname;
    this.balance = 1000000;
}


var jonesBankAccount = new BankAccount ("Jones");

console.log("HEY! Jones has " + jonesBankAccount.balance + " dollars!");
