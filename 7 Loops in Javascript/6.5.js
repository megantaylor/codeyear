function substring(all, start, end) {
	
	if (start >= end){
		return all[start];
	}
	else {
		substring(all, start +1, end);
		return all[start] + substring(all, start + 1, end);
	}
}

console.log(substring("lorem ipsum dolor",6,10));
