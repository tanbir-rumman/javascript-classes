"use strict";

class userName {
    constructor() {
        alert("Hello");
    }
}

new userName();

class userValue {
    constructor(firstVall, secendVall, lastVall) {
        this.firstVall = firstVall;
        this.secendVall = secendVall;
        this.lastVall = lastVall;
    }
}

let constructorRecebie = new userValue("Hello", "By bY", "Ta Ta");
console.log(constructorRecebie);

class myFunc {
    constructor(firstV1, secendV2) {
        return {
            firstV1,
            secendV2,
        };
    }
}

let returnFunc = new myFunc("Hello User", "Its A Class Constructor");
console.log(returnFunc);
