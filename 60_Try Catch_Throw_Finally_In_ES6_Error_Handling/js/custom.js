"use strict";

try {
    console.log("Hello User");
    // console.log(myName);
    let userAge = 30;
    if (userAge > 20) {
        throw "Hello father";
    } else if (userAge < 20) {
        throw "Hello Son";
    }
} catch (erroring) {
    // console.log(erroring.name);
    // console.log(erroring.message);
    console.log(erroring);
} finally {
    console.log("This Is Finally");
}
