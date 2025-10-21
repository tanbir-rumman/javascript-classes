"use strict";

function userVlue(firstName, lastName, secenVal) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.secenVal = secenVal;
}

let newObj = new userVlue("Rumman", "Tanbir", "Araf");
console.log(newObj);

let userNames = {
    name: "Rumman",
    ïd: "12345",
    value: "Byby",
};

console.log(userNames);
