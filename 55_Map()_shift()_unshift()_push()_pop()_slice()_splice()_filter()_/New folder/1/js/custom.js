"use strict";

// let userNames = [
//     "Rumman",
//     "Tanbir",
//     "Araf",
//     "Tanjib",
//     "Ahmed",
//     "Araf",
//     "Khalid",
//     "AL Araf",
// ];

// let final = [];
// userNames.forEach(myFunc);

// function myFunc(rec) {
//     final.push(rec);
// }
// console.log(final);

let userNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let secendVal = userNum.map(func);

function func(ret) {
    return ret * 2;
}

console.log(secendVal);
