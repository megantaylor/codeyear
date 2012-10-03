var name = "John Doe";

getFirstName = function(fullName) {
	var firstName = "";
	var next = fullName[1];
	var i = 0;
	var length = fullName.length;
	while (i<length && next != " ") {
		firstName = firstName += fullName[i];
		i++;
		next = fullName[i];
	}
	return firstName;
};

console.log(getFirstName(name));
