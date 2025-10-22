"use strict";
// ALL ARRAYS

let userName3 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];

userName3.push("Hello");
console.log(userName3);

//এভাবে push() এর মাধ্যমে একটি array তে শেষের দিকে একটি ভ্যালু প্রবেশ করানো হয়

userName3.pop();
console.log(userName3);

//এভাবে pop() এর মাধ্যমে একটি array তে শেষের দিকে একটি ভ্যালু delet করানো জয়া

//-----------------------------------------------------//
let userName9 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];
userName9.unshift("hello");
console.log(userName9);

//এভাবে unshift() এর মাধ্যমে একটি array তে সুরুর দিকে একটি ভ্যালু প্রবেশ করানো হয় , এবং মূল array পরিবর্তিত হয়

userName9.shift();
//এভাবে shift() এর মাধ্যমে একটি array তে সুরুর দিকে একটি ভ্যালু প্রবেশ করানো হয় এবং মূল array পরিবর্তিত হয়।
console.log(userName9);
//-----------------------------------------------------//

let userNumber1 = [20, 30, 50, 51, 70, 80, 40, 45, 65];

let retVal = userNumber1.filter((inVal) => {
    return inVal <= 50;
});
console.log(retVal);

let filtVal = [20, 15, 25, 50, 70, 99, 10, 21, 58, 88, 54];

let valter = filtVal.filter(funcfil);
function funcfil(inVal) {
    return inVal > 30;
}
console.log(valter);

// এইভাবে filter() এর মাধ্যমে একটি array এর কন্ডিশন দিয়ে সব চেয়ে ছোট ভ্যালু বা সব চেয়ে বড় ভ্যালু গুলো বের করা যায় এবং উক্ত ভ্যালু গুলো একটি নতুন array তে জমা হয় এবং মূল array পরিবর্তিত হয় না ।

// -----------------------------------------------------//

// এইভাবে find() এর মাধ্যমে একটি array এর প্রথমে থাকা সবচেয়ে ছোট ভ্যালু বা সবচেয়ে বড় ভ্যালু থেকে বের করা যায় এবং উক্ত ভ্যালু গুলো একটি নতুন array তে জমা হয় মূল array পরিবর্তিত হয় না ।

let userNumber2 = [20, 30, 50, 51, 70, 80, 40, 45, 65];

let findeValret = userNumber2.find((findeVal) => {
    // return findeVal < 50;
    return findeVal > 50;
});

console.log(findeValret);

// -----------------------------------------------------//

// এইভাবে findIndex() এর মাধ্যমে একটি array এর প্রথমে থাকা সবচেয়ে ছোট ভ্যালু বা সবচেয়ে বড় ভ্যালু থেকে index বের করা যায় এবং উক্ত ভ্যালু গুলো একটি নতুন array তে জমা হয় মূল array পরিবর্তিত হয় না ।

let userNumber3 = [20, 30, 50, 51, 70, 80, 40, 45, 65];

let findvew3 = userNumber3.findIndex(function (indexNumber) {
    return indexNumber > 50;
    // return indexNumber < 50;
});
console.log(findvew3);

// -----------------------------------------------------//

// এইভাবে map() এর মাধ্যমে একটি array এর মধ্যে থাকা সকল ভ্যালু একটি array থেকে বের করে অন্য একটি array তে রাখা যায় এবং উক্ত ভ্যালু গুলো নতুন array তে জমা হয় মূল array পরিবর্তিত হয় না ।

let userName1 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];

let vallRetrun = userName1.map((myVall1) => {
    return myVall1;
});

console.log(vallRetrun);

// একই কাজ আবার অন্য ভাবেও করা জয়া

let userName2 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];

let secendArray = userName2.map(arrayFunc);

function arrayFunc(inVall2) {
    return inVall2;
}
console.log(secendArray);

// এখানে একই কাজ দুইভাবে করে দেখানো হলো

// -----------------------------------------------------//

let concatArry1 = [1, 2, 3, 4, 5];
let concatArry2 = [6, 7, 8, 9, 0];

let concat = concatArry1.concat(concatArry2);
console.log(concat);

//এভাবে concatArry1() এর মাধ্যমে একটি array এর সাথে অন্য একটি array এর মার্জ করা মানে জোড়া লাগানো যায় এবং জোড়া লাগানো উক্ত array গুলো নতুন array তে জমা হয় মূল array পরিবর্তিত হয় না ।

// -----------------------------------------------------//

let mayName = "Md Rumman Hossain Tanbir";

let myArray = Array.from(mayName);
console.log(myArray.indexOf("H"));
// -----------------------------------------------------//
/*
এখানে একটি অগোছালো array sort() এর মাধ্যমে সিরিয়াল করা হলো
এবং উক্ত ভ্যালু গুলো নতুন array তে জমা হয় মূল array পরিবর্তিত হয় না ।
*/

let userNumber4 = [20, 30, 50, 51, 70, 80, 40, 45, 65];

userNumber4.sort(funcShort);
console.log(userNumber4);
//-------------------------------------------------------------//

let userNumber5 = [20, 30, 50, 51, 70, 80, 40, 45, 65];

let userShort1 = userNumber4.sort(funcShort).reverse();
function funcShort(shortIn) {
    return shortIn;
}

/*
এখানে reverse() এর কাজ দেখানো হলো
এখানে একটি অগোছালো array sort() এর মাধ্যমে সিরিয়াল করা হলো
সেই সাথে reverse() দিয়ে এটিকে উলটো করা হলো
*/

//-------------------------------------------------------------//

let userName6 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];

console.log(userName6.includes("Hossain"));
console.log(userName6.includes("mohammad"));

/*

 এখানে includes() এর কাজ দেখানো হলো, includes() এর কাজ হলো একটি ভ্যালু উক্ত array তে রয়েছে কিনা তা চেক করা, এবং includes("hello") যে ভ্যালুটি এর মধ্যে দেয়া আছে সেটি যধি উক্ত array তে থাকে তাহলে result হবে true , আর যধি না থাকে তাহলে result হবে false

*/
// --------------------------------------------------

let myNumber1 = [10, 20, 40, 30, 45, 80, 7];

let myVfor = myNumber1.forEach((itsFor) => {
    console.log(itsFor * 2);
});

let userName7 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];

userName7.forEach(myFor);
function myFor(inFor) {
    console.log(inFor);
}

/*
এখানে forEach() এর মাধ্যমে একটি array এর ভ্যালু গুলো function এর মধ্যমে ২ দিয়ে গুন করে
 এনে অন্য একটি array তে রাখা হয়
*/

let userName8 = ["Rumman", "Hossain", "Araf", "Tanbir", "Tanjib", "Khalid"];

let myforV = userName8.forEach((ThisVal) => {
    console.log("Hello " + ThisVal);
});

//-------------------------------------------------------------//
