"use strict";

let form = document.getElementById("form");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

// show Error function
function showError(input, errorMessage) {
    let formControl = input.parentElement;
    formControl.classList.remove("success");
    formControl.classList.add("error");
    let small = formControl.querySelector("small");
    small.innerText = errorMessage;
}

// show Success function
function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("success");
}

// input validation function
function checkInput(inputArry) {
    inputArry.forEach((input) => {
        if (input.value === "") {
            showError(input, `Confirm password`);
        } else {
            showSuccess(input);
        }
    });
}

// check length function
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${fieldName(input)} is at least ${min} carecter`);
    } else if (input.value.length > max) {
        showError(input, `${fieldName(input)} is less than ${max} carecter`);
    } else {
        showSuccess(input);
    }
}

// check Passowrd Match
function checkPassowrdMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// check email validation
function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Enter valid ${fieldName(input)}`);
    }
}

// field name capitalize funtion
function fieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// input function call here
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput([userName, email, password, password2]);
    checkLength(userName, 4, 15);
    checkLength(password, 6, 25);
    checkPassowrdMatch(password, password2);
    checkEmail(email);
});
