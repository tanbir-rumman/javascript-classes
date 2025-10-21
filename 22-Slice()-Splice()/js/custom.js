"use strict";
let newArrys = ["Rumman", "Araf", "Tanbir", "Khalid", "Tanjib"];
console.log(newArrys.indexOf("Khalid"));

newArrys[5] = "Bangladesh";
newArrys.push("Hello");
console.log(newArrys);
newArrys.pop();
console.log(newArrys);
newArrys.unshift("Hello");
console.log(newArrys);
newArrys.shift();
console.log(newArrys);
let newMake = newArrys.slice(2, 3);
console.log(newMake);
newArrys.splice(3, 4, "KKKKK", "tttttt");
console.log(newArrys);

let finalArray = ["hello", "Bangladesh", "Love"];
finalArray.splice(1, 2, "by by");
console.log(finalArray);

let myProp = ["Hi", "My", "Your", "son", "name", "Dear", "Fahter"];
console.log(myProp);
let cutingArey = myProp.slice(0, 3);
console.log(cutingArey);
