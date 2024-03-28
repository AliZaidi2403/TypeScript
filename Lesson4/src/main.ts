type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type stirngOrNumber = string | number;
type stirngOrNumberArray = (string | number)[];

type userId = stirngOrNumber;

//////////////////////////\
//Literal Types
let myName: "Amaan";
//here myname will be of type Amaan which means it cant have any
//other value

let userName: "Amaan" | "Ali" | "Zaidi";
//username can have three values

//functions

const sum = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
//typescript will infer the return type of this function as void since it is not returning anything

logMsg("Hello");
logMsg(5);
logMsg(sum(5, 6));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (a, b) {
  return a * b;
};

logMsg(multiply(5, 6));

interface concatFunction {
  (a: string, b: string): string;
}

let concatStirng: concatFunction = function (a, b) {
  return a + b;
};
logMsg(concatStirng("Amaan", "Zaidi"));

//optional Parameters
const addAll = function (a: number, b: number, c?: number): number {
  // return a + b + c; only this will give error since third paramter can be both number or undefined
  if (typeof c !== "undefined") {
    return a + b + c;
  } else {
    return a + b;
  }
};

//default parameters
const sumAll = function (a: number = 10, b: number, c: number = 2): number {
  return a + b + c;
};
logMsg(addAll(5, 6));
logMsg(addAll(5, 6, 7));
logMsg(sumAll(4, 5, 6));
logMsg(sumAll(4, 5));
logMsg(sumAll(undefined, 20)); // we need to pass undefined in order to reach the second parameter

// when we define a type function in those case we can not use default values

//Rest Parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(4, 5, 6, 7, 8, 9));

const createError = (err: string): never => {
  throw new Error(err);
};

// never type is for functions that explicitly throws errors

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type

const numberOrString = (value: number | string): string => {
  if (typeof value === "number") return "number";
  if (typeof value === "string") return "string";
  return createError("This should not happen");
};
