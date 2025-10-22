"use strict";

// class parentClass {
//     func1() {
//         console.log("Hello Parent Func 1");
//     }
// }

// class childClass extends parentClass {
//     func2() {
//         console.log("Hello Parent Func 2");
//     }
// }

// let userReturn = new childClass();
// userReturn.func1();
// userReturn.func2();

class fatherState {
    fatherAssets() {
        console.log("This Is Father Property");
    }
}

class soneState extends fatherState {
    soneAssets() {
        super.fatherAssets();
        //this.fatherAssets();
        console.log("Hello Child");
    }
}

let res1 = new soneState();
res1.soneAssets();
