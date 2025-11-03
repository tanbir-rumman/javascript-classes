"use strict";

async function userFunc() {
    let asyncVar = new Promise((resolve) => {
        resolve("This Is Async");
        console.log("Hello Async");
    });
    return asyncVar;
}

async function asyncFinal() {
    let returnAsync = await userFunc();
    console.log(returnAsync);
    console.log("Hello 1");
    console.log("Hello 2");
    console.log("Hello 3");
}

asyncFinal();
