"use strict";
// First and old method
function oldObj(firstName) {
    firstName = typeof firstName !== "undefined" ? firstName : "Not Have Value";
    console.log(firstName);
}
oldObj("rumman");

// last And new method
function newObj(firstName = "Hello") {
    console.log(firstName);
}

newObj("HEllo");

let firstName = "Hello";
let trenaryVal = firstName == "Hello" ? "This Is Hello" : "Not Have Value";
console.log(trenaryVal);

function userValue(newVal) {
    newVal = typeof newVal !== "undefined" ? newVal : "Ther Is Not Have Value";
    console.log(newVal);
}

userValue("hello User");

let userNamme;
let newValue = typeof userNamme;
console.log(typeof newValue);
