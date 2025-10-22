"use strict";

let soneNames = ["Tanjib", "Ahmed", "Araf", "khalid", "Asem"];

soneNames.forEach((names, index) => {
    console.log(names, index);
});

let herosName = [
    "Salman khan",
    "Sharukh khan",
    "Amir Khan",
    "Saif Ali khan",
    "Newaz Uddin Siddik",
];

herosName.forEach(myFunc);

function myFunc(ReceiveName) {
    console.log(ReceiveName);
}
