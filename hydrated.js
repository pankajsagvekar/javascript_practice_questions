const litres = time => {
    return (Math.floor(0.5*time));
};

//floor to round to smallest value

console.log(litres(0)); 
console.log(litres(2)); 
console.log(litres(1.4)); 
console.log(litres(12.3)); 
console.log(litres(0.82)); 
console.log(litres(11.8)); 
console.log(litres(1787)); 