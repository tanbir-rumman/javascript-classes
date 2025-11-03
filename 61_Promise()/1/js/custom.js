"use strict";

let userAgree = true;

new Promise((rsolve, reject) => {
    setTimeout(() => {
        if (userAgree) {
            rsolve("Hello Its True");
        } else {
            reject("This Is False");
        }
    }, 2000);
})
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
