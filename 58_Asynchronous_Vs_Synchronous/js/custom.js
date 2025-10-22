"use strict";

function userName1() {
    console.log("Func-1");
}
setTimeout(function () {
    console.log("Func-2");
});

function userName3() {
    console.log("Func-3");
}

userName1();

userName3();
