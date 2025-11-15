"use strict";

// function alerting() {
//     document.write("Hello Bangladesh");
// }

function timeimng() {
    document.getElementById("timeDate").innerHTML = Date();
}

// function newTime() {
//     document.getElementById("tim").innerHTML = Date();
// }

let bgColor = document.getElementById("bg-color1");

bgColor.onclick = backgrounding;

function backgrounding() {
    document.body.style.backgroundColor = "green";
}

let bg = document.getElementById("bg-color2");
bg.onclick = backColor;
function backColor() {
    document.body.style.backgroundColor = "blue";
}

let bgColor1 = document.getElementById("bg-color3");
bgColor1.onclick = bg1;
function bg1() {
    document.body.style.backgroundColor = "#000";
}

let whiteCoor = document.getElementById("bg-color4");
whiteCoor.onclick = whitec;
function whitec() {
    document.body.style.backgroundColor = "#d7e3f0ff";
}

let timeNow = document.getElementById("tim1");

timeNow.onclick = timing1;

function timing1() {
    let timeNow = date();
    document.write;
}

function showTime() {
    let now = new Date(); // বর্তমান সময়ের অবজেক্ট তৈরি
    let time = now.toLocaleTimeString(); // সময়কে সুন্দর ফরম্যাটে রূপান্তর
    document.getElementById("timeDisplay").innerText = "এখন সময়: " + time;
}

function timeNow1() {
    let nowD = new Date();
    let timeiN = nowD.toLocaleTimeString();
    document.getElementById("tim3").innerText = "Now At: " + timeiN;
}
