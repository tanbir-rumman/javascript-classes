"use strict";

function ObjectLiterals(firstVal, secendVall) {
    return {
        first: firstVal,
        secend: secendVall,
    };
}

let objectLit = ObjectLiterals("Hello", "Literals");
console.log(objectLit["first"], objectLit["secend"]);

function userValue(firstUser, secendUser) {
    return {
        firstUser,
        secendUser,
    };
}
let returnUserValue = userValue("My Name", "Rumman");
console.log(returnUserValue["firstUser"], returnUserValue["secendUser"]);

function finalRes(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}

let returnObj = finalRes("Tanbir", "Rumman");
console.log(returnObj["firstName"]);
