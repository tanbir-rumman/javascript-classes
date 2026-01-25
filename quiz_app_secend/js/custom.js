"use strict";
let form = document.querySelector("#form");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    quizApp1();
    quizApp2();
    quizApp3();
});

function quizApp1() {
    let selectRadio = document.querySelector('input[name="quiz1"]:checked');
    if (!selectRadio) {
        answer1.textContent = "Please select correct value";
        answer1.style.color = "red";
        return;
    }

    if (selectRadio.value === "10") {
        answer1.textContent = `correct value is ${selectRadio.value}`;
        answer1.style.color = "#000";
    } else {
        answer1.textContent = "Please select correct value";
        answer1.style.color = "red";
    }
}

function quizApp2() {
    let selectRadio = document.querySelector('input[name="quiz2"]:checked');
    if (!selectRadio) {
        answer2.textContent = "Please select correct value";
        answer2.style.color = "red";
        return;
    }

    if (selectRadio.value === "20") {
        answer2.textContent = `correct value is ${selectRadio.value}`;
        answer2.style.color = "#000";
    } else {
        answer2.textContent = "Please select correct value";
        answer2.style.color = "red";
    }
}

function quizApp3() {
    let selectRadio = document.querySelector('input[name="quiz3"]:checked');
    if (!selectRadio) {
        answer3.textContent = "Please select correct value";
        answer3.style.color = "red";
        return;
    }

    if (selectRadio.value === "40") {
        answer3.textContent = `correct value is ${selectRadio.value}`;
        answer3.style.color = "#000";
    } else {
        answer3.textContent = "Please select correct value";
        answer3.style.color = "red";
    }
}
