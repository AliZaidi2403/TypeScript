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
let stringArray: string[] = []; // inferring that this will be a string array and only string value
// can be assigned to it

// we can have a tuple that will be more strict than an array

let myTuple: [string, number, boolean] = ["Amaan", 24, true];
//myTuple[1] = "amaan"; error
myTuple[1] = 48;
console.log(myTuple);

//this will work bcz mixed can store any of these three value at any position
let mixed = ["John", 49, false];

mixed = myTuple;

//myTuple = mixed; this wil give error mixed we dont need to worry about position of datatype but
//in tuple we do have to, also mixed can have any number of elements while mytuple can have only 3

//Objects
let myObj: object;
//since we know in js array is also a form of object
myObj = [];

console.log(typeof myObj);

const exampleObj = {
  prop1: "name",
  prop2: "age",
};
//here what ts will infer is it is a type of object with two properties which will be both of type stirng

//exampleObj.prop1= 46 ; error

//creating our own type

type Player = {
  name: string;
  age: number;
  experiance: number;
  fit: boolean;
  goals: (string | number)[];
};
let Ronaldo: Player = {
  name: "Cristiano Ronaldo",
  age: 38,
  experiance: 20,
  fit: true,
  goals: [36, 38, 69],
};
// here the type player will have all these properties and it is mandatory to have all these properties
// another thing to note is we cannot add another property to the object built from player
//we can make property optional too

type Musician = {
  name: string;
  instrument: string;
  country: string;
  age?: number;
}; // here the property age is optional

const greetMusician = (musician: Musician) => {
  return `Hello ${musician.name}`;
};

let arijit: Musician = {
  name: "Arijit Singh",
  instrument: "Guitar",
  country: "India ",
};

console.log(greetMusician(arijit));

enum Grade {
  U,
  F,
  G,
  H,
  I,
}
enum Marking {
  A = 1,
  B,
  C,
  D,
}
console.log(Grade.U);
console.log(Marking.C);
