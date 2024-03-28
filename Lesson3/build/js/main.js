"use strict";
//typescript will infer it as string array ;
let stringArr = ["amaan", "zaidi", "united"];
//typescript will infer it as union array for string and number;
let hiha = ["amaan", 567];
//typescript will infer it as union array for string number and boolean ;
let haha = ["amaan", true, 567];
stringArr.push("hey");
//stringArr.push(46); this gives error because we can only put in string inside the string array
//now assigning hiha to haha is completely fine since haha can have string and numbers but not the
//other way around
let test = []; //ts will infer any type
let stringArray = []; // inferring that this will be a string array and only string value
// can be assigned to it
// we can have a tuple that will be more strict than an array
let myTuple = ["Amaan", 24, true];
//myTuple[1] = "amaan"; error
myTuple[1] = 48;
console.log(myTuple);
//this will work bcz mixed can store any of these three value at any position
let mixed = ["John", 49, false];
mixed = myTuple;
//myTuple = mixed; this wil give error mixed we dont need to worry about position of datatype but
//in tuple we do have to, also mixed can have any number of elements while mytuple can have only 3
//Objects
let myObj;
//since we know in js array is also a form of object
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "name",
    prop2: "age",
};
let Ronaldo = {
    name: "Cristiano Ronaldo",
    age: 38,
    experiance: 20,
    fit: true,
    goals: [36, 38, 69],
};
const greetMusician = (musician) => {
    return `Hello ${musician.name}`;
};
let arijit = {
    name: "Arijit Singh",
    instrument: "Guitar",
    country: "India ",
};
console.log(greetMusician(arijit));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["F"] = 1] = "F";
    Grade[Grade["G"] = 2] = "G";
    Grade[Grade["H"] = 3] = "H";
    Grade[Grade["I"] = 4] = "I";
})(Grade || (Grade = {}));
var Marking;
(function (Marking) {
    Marking[Marking["A"] = 1] = "A";
    Marking[Marking["B"] = 2] = "B";
    Marking[Marking["C"] = 3] = "C";
    Marking[Marking["D"] = 4] = "D";
})(Marking || (Marking = {}));
console.log(Grade.U);
console.log(Marking.C);
