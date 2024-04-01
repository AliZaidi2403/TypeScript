"use strict";
// Index Signatures
//these are useful when wew are creating a object but we dont know the names of the object keys
//but we know the shape of the object so we can declare the type of the keys and type of the value
//Another reason they are useful is typescript require index signature when are accesing any property
//of the object dynamically
//Type allows the use of index signature inly with interfaces
const todaysTransaction = {
    Pizza: -10,
    Bokks: 5,
    Jobs: 50,
};
//Normal aceesing the property
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);
//here we are telling that all of the keys in the object key value pair are of type string
// and all of the values are of type number and this is a index signature
//and this allow us to access the proprties dynamically
const todaysTransactionDyn = {
    Pizza: 10,
    Bokks: 5,
    Jobs: 50,
};
let prop = "Pizza";
console.log(todaysTransactionDyn[prop]);
const todaysNet = (transactions) => {
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
//in index signature we have to provide this because classes are optional so its value type are
//either undefined or number array and for name and GPA string and number
const student = {
    name: "Doug",
    GPA: 3.5,
    myFunc: (x, y) => x + y,
};
console.log(student.test); //doesnt throws error because of index signatures just return undefined
for (const key in student) {
    console.log(key);
    console.log(student[key]);
}
const Ronaldo = {
    name: "Cristiano Ronaldo",
    country: "Portugal",
};
// the keyof operator is used to obtain the union type of all keys of a given type.
for (const key in Ronaldo) {
    console.log(`${key} : ${Ronaldo[key]}`);
}
//here we are dynamically accesing property without providing index signature
Object.keys(Ronaldo).map((el) => {
    console.log(Ronaldo[el]);
});
/////////////////////////////////////////////////////////////
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(Ronaldo, "name");
//although we can use literal types in type but we can not be specific in type like here
//name can be a number and string and same for class and enrollment number
const monthlyIncomes = {
    name: "Amaan",
    class: "CSE",
    "Enrollment number": 17,
};
for (const key in monthlyIncomes) {
    console.log(`${key} : ${monthlyIncomes[key]}`);
}
//so we can use keyof in record utility types too
