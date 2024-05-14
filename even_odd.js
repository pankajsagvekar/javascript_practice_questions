const even_or_odd = number => {
    if(number % 2 ==0){
        return "Even";
    }
    return "Odd";
};

//test case
console.log(even_or_odd(0));
console.log(even_or_odd(2)); 
console.log(even_or_odd(3)); 
console.log(even_or_odd(-3)); 