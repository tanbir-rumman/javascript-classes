"use strict";

let body1 = function () {
    document.getElementById("body").style.backgroundColor = "green";
};

function lodingBody() {
    document.getElementById("loding-Page");
    ("Page Is Loding complete");
}

let btnTest = document.getElementById("btn-test");
btnTest.onclick = jsCheck;

let Enter = document.getElementById("Enter");
Enter.onmouseenter = mouseEnter;

let out = document.getElementById("out");
out.onmouseout = mouseOut;

function mouseEnter() {
    document.getElementById("text-show2").innerHTML = "Mouse Enter";
}

function mouseOut() {
    document.getElementById("text-show3").innerHTML = "Mouse Out";
}

function jsCheck() {
    document.getElementById("text-show").innerHTML = "clicked";
    document.getElementById("text-show").innerHTML = "Hello User";
    document.getElementById("text-show").style.backgroundColor = "#a0272783";
    document.getElementById("text-show").style.width = "50%";
    document.getElementById("text-show").style.margin = "auto";
    document.getElementById("text-show").style.padding = "10px";
}

let form = document.getElementById("form");
form.onkeydown = keyPress;
function keyPress() {
    document.getElementById("text-show").innerHTML = "key down";
}
