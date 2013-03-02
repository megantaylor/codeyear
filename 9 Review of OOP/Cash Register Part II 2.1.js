function printListStartingAtIndex(list, index) {		
    if (index >= list.length) {
		return;
    } else {
        //fill this in
        console.log(list[index]);
		printListStartingAtIndex(list, index + 1);
	}
}

//don't change these lines
var list = [0, 2, 4, 5, 6, 7, 9, 100];
printListStartingAtIndex(list, 0);
