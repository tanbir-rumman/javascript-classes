"use strict";

let areYouMane = true;

new Promise((solve, reject) => {
    setTimeout(() => {
        if (areYouMane) {
            solve("Yes He Is A Man");
        } else {
            reject("No He Is Not A man");
        }
    }, 2000);
})
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
