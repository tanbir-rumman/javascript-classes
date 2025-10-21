"use strict";

function creatObj(firstName, lastName, fatherName, motherName) {
    this.FirstName1 = firstName;
    this.LastName1 = lastName;
    this.FatherName1 = fatherName;
    this.MotherName1 = motherName;
}

let objectRdable = new creatObj("Rummna", "Hossain", "Mezbahuddin", "Zakia");
console.log(objectRdable);
