const past = (h, m, s) => {
    if (h <= 23 && m <= 59 && s <= 59) {
        let ans = (h*60*60 + m*60 + s)*1000;
        return ans;
    }
};

//test case
console.log(past(0, 0, 0));
console.log(past(0, 1, 1)); 
console.log(past(1, 0, 0)); 
console.log(past(1, 0, 1)); 
console.log(past(1, 1, 1)); 