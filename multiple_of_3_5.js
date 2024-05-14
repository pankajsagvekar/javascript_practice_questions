function solution(number) {
    let sum = 0;
    if (number <= 0) {
        return 0;
    }
    else {
        for (let i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
}

//test cases
console.log(solution(0));
console.log(solution(-15)); 
console.log(solution(10)); 
console.log(solution(20)); 
console.log(solution(200)); 