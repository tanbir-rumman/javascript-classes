"use strict";

//check define document
let form = document.getElementById("form");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let errorShow = document.getElementById("errorShow");
let showValue = document.getElementById("showValue");

form.addEventListener("submit", checkFormValidation);

// check add error class
function showError(input, Errormessage) {
    let formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.classList.remove("success");
    let small = formControl.querySelector("small");
    small.textContent = Errormessage;
}

// check add success class
function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("success");
}

// check Input Value
function checkInputValue(inputArr) {
    inputArr.forEach((input) => {
        if (input.value === "") {
            showError(input, `${checkFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `User Name Is min ${min} charecter`);
    } else if (input.value.length > max) {
        showError(input, `User Name Is max ${max} charecter`);
    } else {
        showSuccess(input);
    }
}

// check password
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "password is not match");
    } else if (input2.value === "") {
        showError(input2, "confirm password is required");
    } else {
        showSuccess(input2);
    }
}

// check email

function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `enter invalid ${checkFieldName(input)}`);
    }
}

function radioValue(gender) {
    return document.querySelector(`input[name="${gender}"]:checked`);
}

// check field name
function checkFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check function call
function checkFormValidation(e) {
    e.preventDefault();
    checkInputValue([userName, email, password, password2]);
    checkLength(userName, 3, 15);
    checkLength(password, 6, 20);
    checkPasswordMatch(password, password2);
    checkEmail(email);

    // check radio button
    let radioSelect = radioValue("gender");
    if (!radioSelect) {
        errorShow.textContent = "Plse Select Gender";
        return;
    }
    errorShow.textContent = "";
    showValue.textContent = radioSelect.value;
}
