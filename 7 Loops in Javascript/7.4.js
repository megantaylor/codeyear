var table = [
    ["Person",  "Age",  "City"],
    ["Sue",     22,     "San Francisco"],
    ["Joe",     45,     "Halifax"]
];

var rows = table.length;
var r;

for(r = 0; r < rows; r++) {
	var c;
	var cells = table[r].length;
	var rowText = "";
	for(c = 0; c < cells; c++) {
		rowText += table[r][c];
		if(c < cells - 1) {
			rowText += "  ";
		}
	}
	console.log(rowText);
}
