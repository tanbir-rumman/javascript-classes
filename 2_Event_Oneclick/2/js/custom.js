"use strict";

// let backg1 = document.getElementById("bg-1");
// backg1.onclick = func1;

// function func1() {
//     document.body.style.backgroundColor = "red";
// }

// let back2 = document.getElementById("bg-2");

// back2.onclick = func2;
// function func2() {
//     document.body.style.backgroundColor = "green";
// }

let bacg3 = document.getElementById("bg-3");
bacg3.onclick = func3;
function func3() {
    document.body.style.backgroundColor = "blue";
}

let back4 = document.getElementById("bg-4");
back4.onclick = func4;
function func4() {
    document.body.style.backgroundColor = "maroon";
}

let takeBtn = document.querySelector("#btn");
takeBtn.oneclick = myFunc;
function myFunc() {
    document.body.style.backgroundColor = "green";
}

// let writing = document.getElememtById("write");
// writing.onclick = showLetter;

// function showLetter() {
//     document.write("Hello World");
// }
