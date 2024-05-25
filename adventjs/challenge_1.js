/*
In the toy factory of the North Pole, each toy has a unique identification number.
However, due to an error in the toy machine, some numbers have been assigned to more than one toy.
Find the first identification number that has been repeated, where the second occurrence has the smallest index!
In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.
*/

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);

function findFirstRepeated(ids) {
    let seen = {};
    for (let i = 0; i < ids.length; i++) {
        if (seen[ids[i]]) {
            return ids[i];
        }
        console.log(seen);
        seen[ids[i]] = true;
    }
    return -1;
}

//how this works is we iterate through a array and mark every element we
//see while iterating 'true' but if we see it 'true' the other time without marking it
//true we return it. Check Obisidian file