var isOdd = function (n) {
    if (n % 2 === 0) { 
        return false;
    } else { 
        return true;
        }
    }; 
var isEven=function(n) {
    return !isOdd(n);
    };