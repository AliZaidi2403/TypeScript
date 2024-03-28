"use strict";
//////////////////////////\
//Literal Types
let myName;
//here myname will be of type Amaan which means it cant have any
//other value
let userName;
//username can have three values
//functions
const sum = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
//typescript will infer the return type of this function as void since it is not returning anything
logMsg("Hello");
logMsg(5);
logMsg(sum(5, 6));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(5, 6));
let concatStirng = function (a, b) {
    return a + b;
};
logMsg(concatStirng("Amaan", "Zaidi"));
//optional Parameters
const addAll = function (a, b, c) {
    // return a + b + c; only this will give error since third paramter can be both number or undefined
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//default parameters
const sumAll = function (a = 10, b, c = 2) {
    return a + b + c;
};
logMsg(addAll(5, 6));
logMsg(addAll(5, 6, 7));
logMsg(sumAll(4, 5, 6));
logMsg(sumAll(4, 5));
logMsg(sumAll(undefined, 20)); // we need to pass undefined in order to reach the second parameter
// when we define a type function in those case we can not use default values
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(4, 5, 6, 7, 8, 9));
const createError = (err) => {
    throw new Error(err);
};
// never type is for functions that explicitly throws errors
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "number")
        return "number";
    if (typeof value === "string")
        return "string";
    return createError("This should not happen");
};
