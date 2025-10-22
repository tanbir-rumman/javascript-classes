"use strict";

let userNumber = [, 4, 5, 6, 8, 9, 75, 64, 52, 6, 58, 63, 255];

let retNum = userNumber.filter((fil) => {
    return fil > 20;
});

console.log(retNum);
