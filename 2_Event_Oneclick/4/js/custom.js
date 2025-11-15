"use strict";

function changeText() {
    document.getElementById("showText").innerHTML = "Subscribed";
    document.getElementById("btn1").innerHTML = "Subscribed";
    document.getElementById("btn1").style.backgroundColor = "#007c80";
    document.getElementById("btn1").style.width = "50%";
}

function keypressd() {
    document.getElementById("showText").innerHTML = "Key Pressd";
}

function pageLoad() {
    document.getElementById("showText").innerHTML = "page loding complite";
}

let btn = document.getElementById("btn1");
btn.onclick = showText1;

function showText1() {
    document.getElementById("showText").innerHTML = "hello user";
}
