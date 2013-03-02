//Your three dimensional array from the last exercise probably
//looked something like this:
var hands = [];
hands[0] = [ [3,"H"], ["A","S"], [1,"D"], ["J","H"], ["Q","D"] ];
hands[1] = [ [9,"C"], [6,"C"], ["K","H"], [3,"C"], ["K","H"] ];

//Loop over every dimension in the array, logging out the suit and rank
//of each card in both hands
//1. loop over each hand
for (var i = 0; i < hands.length; i++) {
    //2. loop over each card array in each hand
    for (var x = 0; x < hands[i].length; x++) {
        //3. loop over each rank/suit array for each card in each hand
        for (var y = 0; y < hands[i][x].length; y++) {
            //4. log the value of the rank/suit array item
            console.log(hands[i][x][y]);
        }
    }
}
