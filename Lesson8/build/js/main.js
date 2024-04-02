"use strict";
// Now the idea of type script is to create strict types for type safe deveeloper experiance
//however ts does allow for genrics because sometime we dont know what type will be passed in
//function, type alias, class,interface and genric allow us to provide placehoder
const stringEcho = (arg) => arg;
//now this function takes string as an arguemnt and return the arguement
//To generalise
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj({ isobj: true }));
console.log(isObj([1, 2, 3, 4, 5]));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3, 4, 5]));
console.log(isTrue({}));
console.log(isTrue({ is: "yes" }));
console.log(isTrue(""));
console.log(isTrue("Amaan"));
console.log(isTrue(null));
console.log(isTrue(undefined));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
//here we are making sure that the type must have id property
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 9, name: "Amaan" }));
///////////////////////////////////////////////////////////////////////////////////////////
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const userArray = [
    {
        id: 1,
        name: "Amaan",
        club: "Manchester United",
        country: "India",
    },
    {
        id: 2,
        name: "Dave",
        club: "Liverpool fc",
        country: "England",
    },
];
console.log(getUsersProperty(userArray, "club"));
console.log(getUsersProperty(userArray, "name"));
/////////////////////////////////////
//using a genric in a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Amaan"); //here typescript is inferring T as string
console.log(store.state);
store.state = "Ali";
console.log(store.state);
//store.state = 12 ; this will throw an error
//here we are explicitly telling ts what type of t is going to be
const myState = new StateObject([12, 13]);
myState.state = [12, "Amaan"];
