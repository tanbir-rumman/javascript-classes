"use strict";

let form = document.querySelector("#form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let genderArea = document.querySelector(".genderArea");
let checkBox = document.querySelector(".checkBox");
let showGender = document.querySelector(".showGender");
let checkBoxArea = document.querySelector(".checkBoxArea");
let showCheckBox = document.querySelector(".showCheckBox");
let showCheckValue = document.querySelector(".showCheckValue");

form.addEventListener("submit", inputValidation);

// check error
function showError(input, errorMessage) {
    let formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.classList.remove("success");
    let small = formControl.querySelector("small");
    small.textContent = errorMessage;
}

// checke success
function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
}

// check input
function checkeInputValid(inputArray) {
    inputArray.forEach((input) => {
        if (input.value === "") {
            showError(input, `${fieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check length
function chekeLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${fieldName(input)} is min ${min} charecter`);
    } else if (input.value.length > max) {
        showError(input, `${fieldName(input)} is max ${max} charecter`);
    } else {
        showSuccess(input);
    }
}

// checke password matching
function checkePassLength(input1, input2) {
    if (input1.value === "") {
        showError(input1, `password is required`);
    } else if (input2.value === "") {
        showError(input2, "Confirm is required");
    } else if (input1.value !== input2.value) {
        showError(input2, "Confirm Password is not matching");
    } else {
        showSuccess(input1);
        showSuccess(input2);
    }
}

// checke email
function checkeEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is required");
    }
}

// check field name
function fieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// checke input handler
function inputValidation(e) {
    e.preventDefault();

    let isValid = true;

    if (firstName.value === "") {
        isValid = false;
    }

    if (lastName.value === "") {
        isValid = false;
    }

    if (email.value === "") {
        isValid = false;
    }

    if (password.value === "") {
        isValid = false;
    }
    if (password2.value === "") {
        isValid = false;
    }

    checkeInputValid([firstName, lastName, email, password, password2]);
    chekeLength(firstName, 3, 20);
    chekeLength(lastName, 3, 20);
    chekeLength(password, 6, 25);
    checkePassLength(password, password2);
    checkeEmail(email);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        isValid = false;
    }

    if (!genderValidation()) {
        isValid = false;
    }

    if (!validChekeBox()) {
        isValid = false;
    }

    if (isValid) {
        alert("form submit complete");
        form.reset();
    }
}

// check radio button
function radioCheck(gender) {
    return document.querySelector(`input[name="${gender}"]:checked`);
}

// gender check
function genderValidation() {
    let radioValue = radioCheck("gender");
    if (!radioValue) {
        genderArea.classList.add("showValue");
        return false;
    }

    showGender.textContent = radioValue.value;
    showGender.style.color = "black";
    return true;
}

// checke box validation
function checkBoxValid() {
    let selectBox = document.querySelectorAll(`input[name="color"]:checked`);
    let values = [];
    selectBox.forEach((box) => {
        values.push(box.value);
    });

    return values;
}

function validChekeBox() {
    let inCheckValue = checkBoxValid();
    if (inCheckValue.length === 0) {
        checkBoxArea.classList.add("showCheck");
        return false;
    }

    checkBoxArea.classList.remove("showCheck");
    showCheckValue.classList.add("show");
    showCheckValue.innerHTML = inCheckValue.join(", ");

    return true;
}
