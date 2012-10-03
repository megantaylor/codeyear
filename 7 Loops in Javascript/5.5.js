var name = "John Doe";

getFirstName = function(fullName) {
	var next = fullName[1];
	var i = 0;
	var length = fullName.length;
	while (i<length && next != " ") {
		console.log(fullName[i]);
		i++;
		next = fullName[i];
	}
};

getFirstName(name);
