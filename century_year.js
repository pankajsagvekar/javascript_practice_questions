const century = year =>{
    return (Math.ceil(year/100));
}
//a century consist of 100 years
//Math.ceil to round up
//test case

console.log(century(1705));
console.log(century(1900)); 
console.log(century(1601)); 
console.log(century(2000)); 
console.log(century(89)); 