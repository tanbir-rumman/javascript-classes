"use strict";

let userValue = true;
new Promise((resolve, reject) => {
    setTimeout(() => {
        if (userValue) {
            resolve("This Is Resolve");
        } else {
            reject("It Empty Value");
        }
    }, 2000);
})
    .then((value) => {
        console.log(value);
    })
    .catch((errore) => {
        console.log(errore);
    });
