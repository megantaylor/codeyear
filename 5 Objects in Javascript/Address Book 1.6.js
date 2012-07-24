var bob = {
    firstName: "Bob",
    lastName: "Jones",
    
    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function(){
var number = contacts.length;
for (i=0; i < number; i++) {
printPerson(contacts[i]);
}
};
list();

var search = function(lastName) {
	var number = contacts.length;
	for (i=0; i < number; i++) {
if(lastName === contacts[i].lastName){
printPerson(contacts[i]); 
		}
	}
};

search("Jones");

var add = function(firstName, lastName, email, telephone) {
	var newContact = {
	firstName: firstName,
    lastName: lastName,
    phoneNumber: telephone,
    email: email
	};	
	contacts[contacts.length] = newContact;
};

    
var firstName = prompt("What's the new contact's first Name?");
var lastName = prompt("What's the new contact's last Name?");
var email = prompt("What's the new contact's email address?");
var telephone = prompt("What's the new contact's telephone number?");

add(firstName, lastName, email, telephone);
