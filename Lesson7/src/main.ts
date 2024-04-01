// Index Signatures
//these are useful when wew are creating a object but we dont know the names of the object keys
//but we know the shape of the object so we can declare the type of the keys and type of the value
//Another reason they are useful is typescript require index signature when are accesing any property
//of the object dynamically
//Type allows the use of index signature inly with interfaces

interface TransactionObj {
  readonly Pizza: number;
  Bokks: number;
  Jobs: number;
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Bokks: 5,
  Jobs: 50,
};

//Normal aceesing the property

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);
//todaysTransaction.Pizza = 5 ; throw error - readOnly
//dynamically accessing the property
// will throws error without index signature

//let prop: string = "Pizza";

//console.log(todaysTransaction[prop]);

//const todaysNet = (transactions: TransactionObj): number => {
//  let total = 0;
//  for (const transaction in transactions) {
//    total += transactions[transaction];
//  }
//  return total;
//};

interface TransactionObjDyn {
  readonly [index: string]: number;
}
//here we are telling that all of the keys in the object key value pair are of type string
// and all of the values are of type number and this is a index signature
//and this allow us to access the proprties dynamically

const todaysTransactionDyn: TransactionObjDyn = {
  Pizza: 10,
  Bokks: 5,
  Jobs: 50,
};
let prop: string = "Pizza";

console.log(todaysTransactionDyn[prop]);

const todaysNet = (transactions: TransactionObjDyn): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransactionDyn));
console.log(todaysTransactionDyn.Pizza);
//todaysTransactionDyn.Pizza = 5; - readOnly

console.log(todaysTransactionDyn["dave"]);
//here ts didnt throws any error although there isnt any property dave defined on the object
//and that is because dave is a string and in interface we have defined key as string
//so it has no way of knowing whether its an actual property or not and thus woud not through
//an error and return undefined

interface NewObj {
  readonly [index: string]: number | string;
  Pizzas: number;
  Burgers: number;
  Pasta: number;
}
//now this inteface will require pizza burger and pasta however index signature allow us to add more
//properties to the object

////////////////////////////////////////////////////////////

interface Student {
  [key: string]:
    | number
    | string
    | number[]
    | undefined
    | ((param1: number, param2: number) => number);
  name: string;
  GPA: number;
  classes?: number[];
  myFunc: (param1: number, param2: number) => number;
}
//in index signature we have to provide this because classes are optional so its value type are
//either undefined or number array and for name and GPA string and number
const student: Student = {
  name: "Doug",
  GPA: 3.5,
  myFunc: (x: number, y: number) => x + y,
};

console.log(student.test); //doesnt throws error because of index signatures just return undefined

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

// as we know up till now that to access property of the object dynamically we need to have a index
//signature

interface Star {
  name: String;
  country: String;
}
const Ronaldo: Star = {
  name: "Cristiano Ronaldo",
  country: "Portugal",
};
// the keyof operator is used to obtain the union type of all keys of a given type.
for (const key in Ronaldo) {
  console.log(`${key} : ${Ronaldo[key as keyof Star]}`);
}
//here we are dynamically accesing property without providing index signature

Object.keys(Ronaldo).map((el) => {
  console.log(Ronaldo[el as keyof typeof Ronaldo]);
});

/////////////////////////////////////////////////////////////
const logStudentKey = (student: Star, key: keyof Star): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

logStudentKey(Ronaldo, "name");

// we can not use literal type as key in index signature
interface Income {
  [key: string]: number;
}

type Streams = "name" | "class" | "Enrollment number";
// the Record utility type is used to define an object type with specific keys and
//value types. It allows you to create a type that represents a dictionary-like
// structure where you can specify the keys and their corresponding value types.
type incomes = Record<Streams, string | number>;

//although we can use literal types in type but we can not be specific in type like here
//name can be a number and string and same for class and enrollment number

const monthlyIncomes: incomes = {
  name: "Amaan",
  class: "CSE",
  "Enrollment number": 17,
};
for (const key in monthlyIncomes) {
  console.log(`${key} : ${monthlyIncomes[key as keyof incomes]}`);
}

//so we can use keyof in record utility types too
