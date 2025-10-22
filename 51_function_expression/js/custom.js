"use strict";
let userExp = (h, b) => ({ h, b });
console.log(userExp("Hello", "Hi"));
// এভাবে করলে return হবে অবজেক্ট,

let fincName = (l, c) => {
    return {
        l,
        c,
    };
};
console.log(fincName("This Is Func ", "Name"));
// এভাবে করলে return হবে string অবজেক্ট,

let userFunc = (i, b) => (i, b);
console.log(userFunc("Love", "Bangladesh"));
console.log(typeof userFunc("Love", "Bangladesh"));
// এভাবে করলে return হবে string ,
