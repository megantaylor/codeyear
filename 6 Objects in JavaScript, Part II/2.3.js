var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts') === true) {
	console.log(suitcase.shorts);
} else {
	suitcase.shorts = "short";
	console.log(suitcase.shorts);
}
