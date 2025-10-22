"use strict";

function userNumber1(userAge, fatherName, sonName) {
    if (userAge >= 15) {
        fatherName();
    } else {
        sonName();
    }
}

function fatherName() {
    console.log("This Is Fahter ");
}

function sonName() {
    console.log("This Is Son");
}

let userAge = prompt("Enter Your Age");

userNumber1(userAge, fatherName, sonName);

function userFunc(reci) {
    console.log(reci);
}

function adminFunc(firstVall, userFunc) {
    userFunc(firstVall);
}

adminFunc("This Is User", userFunc);
