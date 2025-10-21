"use strict";

function userValu(firstVall) {
    firstVall = typeof firstVall !== "undefined" ? firstVall : "Give the value";
    console.log(firstVall);
}

userValu();

function sendValue(secendUser = "Not Have a value") {
    console.log(secendUser);
}

sendValue();
