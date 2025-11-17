"use strict";

let body = document.getElementById("body");
let btnTextBgColorChange = document.getElementById("btn-test");
let mouseEnter = document.getElementById("Enter");
let mouseOut = document.getElementById("out");
let form = document.getElementById("form");

body.onload = pageLoading;
btnTextBgColorChange.onclick = updateBtnState;
mouseEnter.onmouseenter = enterMouse;
mouseOut.onmouseout = outMouse;
form.onkeydown = handleKeyDown;
form.onkeyup = KeyPressTextup;

function pageLoading() {
    document.getElementById("loading-Text").innerHTML = "Loading complite";
}

function updateBtnState() {
    document.getElementById("btn-test").innerHTML = "Clicked";
    document.getElementById("btn-test").style.backgroundColor = "green";
}

function enterMouse() {
    document.getElementById("mouse-enter").innerHTML = "Mouse Enter";
}

function outMouse() {
    document.getElementById("mouse-enter").innerHTML = "Mouse Out";
}

function handleKeyDown() {
    document.getElementById("keyup").innerHTML = "Key Down";
}

function KeyPressTextup() {
    document.getElementById("keydown").innerHTML = "Key Up";
}
