function substring(all, start, end) {
	
	if (start >= end){
		console.log(all[start]);
	}
	else {
		console.log(all[start]);
		substring(all, start +1, end);
	}
}

substring("lorem ipsum dolor",6,10);
