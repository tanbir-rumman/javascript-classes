"use strict";

let sizeForm = document.getElementById("sizeForm");
let showError = document.getElementById("showError");
let showSize = document.getElementById("showSize");

function validateRadio(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}

sizeForm.addEventListener("submit", radioCheck);

function radioCheck(e) {
    e.preventDefault();
    let tackeSize = validateRadio("size");
    if (!tackeSize) {
        showError.textContent = "select a value";
        return;
    }
    showError.innerText = "";
    showSize.innerText = tackeSize.value;
}
