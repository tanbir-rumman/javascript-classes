"use strict";

let form = document.querySelector("#form");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    quizOption1();
    quizOption2();
    quizOption3();
});

function quizOption1() {
    let checkedQuiz = document.querySelector(`input[name="quiz1"]:checked`);
    if (!checkedQuiz) {
        answer1.textContent = "select anwer";
        answer1.style.color = "red";
        return;
    }

    if (checkedQuiz.value === "10") {
        answer1.textContent = "Your Answer Is 10";
        answer1.style.color = "#000";
    } else {
        answer1.textContent = "Your answer is wrong";
        answer1.style.color = "red";
    }
}

function quizOption2() {
    let checkedQuiz2 = document.querySelector(`input[name="quiz2"]:checked`);
    if (!checkedQuiz2) {
        answer2.textContent = "select anwer";
        answer2.style.color = "red";
        return;
    }

    if (checkedQuiz2.value === "20") {
        answer2.textContent = "Your Answer Is 20";
        answer2.style.color = "#000";
    } else {
        answer2.textContent = "Your answer is wrong";
        answer2.style.color = "red";
    }
}

function quizOption3() {
    let checkedQuiz3 = document.querySelector(`input[name="quiz3"]:checked`);
    if (!checkedQuiz3) {
        answer3.textContent = "select anwer";
        answer3.style.color = "red";
        return;
    }

    if (checkedQuiz3.value === "40") {
        answer3.textContent = "Your Answer Is 40";
        answer3.style.color = "#000";
    } else {
        answer3.textContent = "Your answer is wrong";
        answer3.style.color = "red";
    }
}
