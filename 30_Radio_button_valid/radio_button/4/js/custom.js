"use strict";

let form = document.getElementById("form");
let showError = document.getElementById("showError");
let showValue = document.getElementById("showValue");

function checkRadio(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}

form.addEventListener("submit", formValidation);

function formValidation(e) {
    e.preventDefault();
    let radioValue = checkRadio("size");
    if (!radioValue) {
        showError.innerText = "select some one";
        return;
    }
    showValue.innerText = radioValue.value;
}
