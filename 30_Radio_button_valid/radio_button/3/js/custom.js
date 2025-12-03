"use strict";
let form = document.getElementById("form");
let ShowError = document.getElementById("ShowError");
let ShowEValue = document.getElementById("ShowEValue");

function inputCheck(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}

form.addEventListener("submit", radioValidation);

function radioValidation(e) {
    e.preventDefault();

    let checkRadio = inputCheck("gender");
    if (!checkRadio) {
        ShowError.textContent = "Plese Select Gender";
        return;
    }

    ShowError.textContent = "";
    ShowEValue.textContent = checkRadio.value;
}
