"use strict";

// let nameList = ["bangladesh", "India", "Pakistan", "Japan", "German", "Quate"];

// let nameRet = nameList.map(nameDuplicate);

// function nameDuplicate(x) {
//     return x;
// }
// console.log(nameRet);

// let userRoll = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// userRoll.forEach((num, myFunc) => {
//     console.log(num, myFunc);
// });

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

// userNames.forEach(myFunc);

// function myFunc(names) {
//     console.log(names);
// }

// let sons = [
//     "First Son",
//     "Secend Sone",
//     "Third Son",
//     "Fourth son",
//     "Fith Son",
//     "Last Sone",
// ];

// let listOfSone = [];
// sons.forEach(sonFunc);

// function sonFunc(soneOfList) {
//     listOfSone.push(soneOfList);
// }

// console.log(listOfSone);

// let sonName = [
//     "First Son",
//     "Secend Sone",
//     "Third Son",
//     "Fourth son",
//     "Fith Son",
//     "Last Sone",
// ];

// let inName = sonName.map(inside);

// function inside(midPersion) {
//     return midPersion;
// }

// console.log(inName);

// let userNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let returnNum = userNum2.map(nuFunc);
// function nuFunc(num) {
//     return num * 2;
// }
// console.log(returnNum);

// let userNum3 = [71, 82, 10, 40, 21, 32, 70, 61, 19];

// let sortNum = userNum3.sort(sortFunc);

// function sortFunc(sortIn) {
//     return sortIn;
// }
// console.log(sortNum);
//-------
// let userNumber4 = [100, 2, 3, 200, 50];

// userNumber4.sort();
// console.log(userNumber4);

function sortNumbers(arr, order = "asc") {
    // order = "asc" → ছোট থেকে বড়
    // order = "desc" → বড় থেকে ছোট
    return arr.sort((a, b) => {
        if (order === "asc") {
            return a - b; // ছোট → বড়
        } else if (order === "desc") {
            return b - a; // বড় → ছোট
        } else {
            throw new Error("Invalid sort order! Use 'asc' or 'desc'.");
        }
    });
}

let userNumber4 = [20, 30, 50, 51, 70, 80, 40, 45, 65];

console.log(sortNumbers(userNumber4));
