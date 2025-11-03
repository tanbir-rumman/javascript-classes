"use strict";

// let myValue = true;

// function promiseFunc() {
//     let promiseCod = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (myValue) {
//                 resolve("Its True Value For My Son");
//             } else {
//                 reject("Its Empty Value ");
//             }
//         }, 2000);
//     });
//     return promiseCod;
// }

// promiseFunc()
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((value) => {
//         console.log(value);
//     });

let myName = false;

let promiseing = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (myName) {
            resolve("Yest This Is " + myName);
        } else {
            reject(" No This Is " + myName);
        }
    }, 2000);
})

    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
console.log(promiseing);
