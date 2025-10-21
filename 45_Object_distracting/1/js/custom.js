"use strict";

let userName = {
    firstName: "Rumman",
    lastName: "Hossain",
    value: "12345",
    roll: 35,
    age: 22,
};

let { firstName, lastName, value, roll, age } = userName;
console.log(firstName, lastName, value, roll, age);

let userInfo = {
    firstName12: "salma begum",
    age1: 22,
    qualification: "ssc",
    roll1: 10,
};

let { firstName12, age1, qualification, roll1 } = userInfo;
console.log(firstName12.indexOf("b"));

let userDeteils = {
    name1: "araf",
    age: 3,
    value: "babby",
    colour: "white",
};

let inDiteils = {};

for (let key in userDeteils) {
    inDiteils[key] = userDeteils[key];
    console.log(inDiteils[key]);
}

let byProduct = {
    productName: "laptop",
    productColor: "Black",
    productPrice: 150000,
    laptopDetails: {
        customarName: "Rumman",
        customarAge: 25,
        customarValue: "Hello",
        castomarId: "12345",
    },
};

let ProductAssign = Object.assign(byProduct);
console.log(ProductAssign);
