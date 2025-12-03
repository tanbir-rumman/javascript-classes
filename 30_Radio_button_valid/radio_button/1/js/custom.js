"use strict";

let sizeForm = document.getElementById("sizeForm");
let sizeError = document.getElementById("sizeError");

function validateRadio(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}

sizeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let selectedSize = validateRadio("size");

    if (!selectedSize) {
        sizeError.textContent = "Please select a size!";
        return;
    }

    sizeError.textContent = "";
    console.log("Selected Size:", selectedSize.value);
});
