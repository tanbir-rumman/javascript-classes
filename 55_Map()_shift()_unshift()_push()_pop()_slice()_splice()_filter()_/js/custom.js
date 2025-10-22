"use strict";

// // এটা আগের সেই পুরোনো ষ্টাইল
// let soneNames = ["Tanjib", "Ahmed", "Araf", "khalid", "Asem"];
// let nameContainer = [];
// soneNames.forEach(userName);
// function userName(storeArray) {
//     nameContainer.push(storeArray);
// }
// console.log(nameContainer);

// // এটা es6 এ নতুন ষ্টাইল

// let cuntryName = ["Bangladesh", "India", "Pakistan", "Afganisthan", "Iran"];
// let emptyVal = cuntryName.map(userFunc);
// function userFunc(myUserName) {
//     return myUserName;
// }
// console.log(emptyVal);

// let studentRoll = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let reAssignRoll = studentRoll.map(studentFunc);
// function studentFunc(roll) {
//     return roll * 3;
// }

// console.log(reAssignRoll);

// let myMap = new Map();

// myMap.set("key1", "Bangladesh");
// myMap.set("key2", "India");
// myMap.set("key3", "Pakistan");
// myMap.set("key4", "Vutan");
// myMap.set("key5", "Maldives");
// myMap.set("key6", "Thilan");

// console.log(myMap.values());
// console.log(myMap.keys());

// let myVall = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let retNum = myVall.map(myfunc4);

// function myfunc4(mapRet) {
//     return mapRet;
// }
// console.log(retNum);

// let obj1 = {
//     firstName: "Rumman",
//     lastName: "Hossain",
// };

// obj1["roll"] = 20;
// console.log(obj1);

// let myMapObj = new Map();

// myMapObj.set("MyName", "Rumman");
// myMapObj.set("SoneName", "Araf");
// myMapObj.set("WifeName", "Araf");

// console.log(myMapObj.values());

// এখানে  map paiare দিয়ে for of loop চালানো হলো

// let myMap3 = new Map();

// myMap3.set("key1", "Bangladesh");
// myMap3.set("key2", "India");
// myMap3.set("key3", "Pakistan");
// myMap3.set("key4", "Vutan");
// myMap3.set("key5", "Maldives");
// myMap3.set("key6", "Thilan");

// for (let objRet of myMap3.values()) {
//     console.log(objRet);
// }

// let userArray = [20, 50, 60, 80, 70, 80, 90, 85];

// let fidFill = userArray.filter(userArrFil);
// function userArrFil(x) {
//     return x > 50;
// }
// console.log(fidFill);

let findArr = [20, 50, 60, 80, 70, 80, 90, 85];

let fiend = findArr.find((findeValue) => {
    return findeValue < 70;
});
console.log(fiend);

let finde2 = fineArr;
