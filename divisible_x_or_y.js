const isDivisible = (n, x, y) => {
    if (n > 0) {
        if (n % x == 0 && n % y == 0) {
            return true;
        }
        return false;
    }

};
//test case
console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4)); 
console.log(isDivisible(8, 3, 4)); 
console.log(isDivisible(48, 3, 4)); 