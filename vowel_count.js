const getCount = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i])) {
            count++;
        }
    }
    return count;
};

console.log(getCount('my pyx'));
console.log(getCount('pear tree')); 
console.log(getCount('abracadabra')); 
console.log(getCount('o a kak ushakov lil vo kashu kakao'));