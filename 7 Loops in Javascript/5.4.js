var name = "John Doe";

getFirstName = function(fullName) {
	var i = 0;
	var length = fullName.length;
	while (i<length) {
		console.log(fullName[i]);
		i++;
	}
};

getFirstName(name);

