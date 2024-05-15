const disemvowel = str => {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        if(!'aeiou'.includes(str[i])) {
            newstr+=str[i];
        }
    }
    return newstr;
};

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'