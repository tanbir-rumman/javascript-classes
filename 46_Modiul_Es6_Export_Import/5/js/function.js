"use strict";

function myDeteils(mayBio) {
    return mayBio;
}

function userDeteils(firstName, secend, ...alll) {
    this.firstName = firstName;
    this.secend = secend;
    this.alll = alll;
}

let allObj = new userDeteils("Rumman", "Araf", "Tanjib", "Khalid");

export { myDeteils, allObj };
