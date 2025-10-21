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
let newMake = newArrys.slice(0, 2);
console.log(newMake);
newArrys.splice(3, 4, "KKKKK", "tttttt");
console.log(newArrys);
