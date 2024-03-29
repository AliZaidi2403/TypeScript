"use strict";
//Type assertion : converting to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; // more specific
let d = "hello"; //this type of syntax cannot be used in tsx file used in react
let e = "World";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// we need to be very careful while type casting since ts is depending on us make it correct to our need
// therefore wont check for example
//here we can see that possible output from the func was number or string however we tell ts that we
//are returning is a number however if we look at the function carefully we can what actually returning
// is a string....
let nexVal = addOrConcat(3, 2, "concat");
//The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// now if we do something like img.src then there will an error because img can be null too and
//we cannot set property on null for that we need to tell ts that we are sure img wont be null use
//type assertions, ! marks is used as a non null asssertion
img.src = "";
