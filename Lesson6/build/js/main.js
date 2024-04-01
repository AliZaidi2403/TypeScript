"use strict";
// classes
// it may seem redundant to mention the property both in constructor and class but we have to do this
/*class coder {
  name: string;
  language: string;
  age: number;

  constructor(name: string, language: string, age: number) {
    this.name = name;
    this.language = language;
    this.age = age;
  }
}*/
// in order to prevent this dupicate code we can use access modifiers
// by default all the properties are public
//private member can only be accessed inside the class while protected can be accessed both inside
//class and derived class
class Coder {
    constructor(name, age, experiance, language = "JavaScript") {
        this.name = name;
        this.age = age;
        this.experiance = experiance;
        this.language = language;
        this.name = name;
        this.language = language;
        this.age = age;
        this.experiance = experiance;
    }
    getAge() {
        return `Hello ${this.name}, you are ${this.age} years old `;
    }
}
const amaan = new Coder("Amaan Zaidi", 21, 0, "TypeScript");
console.log(amaan.getAge());
class WebDev extends Coder {
    constructor(computer, name, experiance, age) {
        super(name, age, experiance);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.language}`;
    }
}
const Ali = new WebDev("Mac", "Ali", 1, 21);
console.log(Ali.getLang());
console.log(Ali.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return ` ${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "Guitar");
console.log(page.play("play"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
console.log(Peeps.count);
const John = new Peeps("John");
console.log(Peeps.count);
const Amy = new Peeps("Amy");
console.log(Peeps.count);
const Steve = new Peeps("Steve");
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Invalid data sent as parameter");
        }
    }
}
const Band1 = new Bands();
Band1.data = ["Amaan", "Zaidi"];
console.log(Band1.data);
