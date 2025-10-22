"use strict";

let userCons = class {
    constructor(first, secend, last) {
        this.first = first;
        this.secend = secend;
        this.last = last;
    }
};
let consReturn = new userCons("Hello", "Hi", "ByBy");
console.log(consReturn.first, consReturn.secend, consReturn.last);
