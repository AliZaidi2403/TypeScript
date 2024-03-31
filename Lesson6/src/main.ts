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
  secondLang!: string; //we are defining a property and telling we are not initializing it right away
  constructor(
    public readonly name: string,
    private age: number,
    public experiance: number,
    protected language: string = "JavaScript"
  ) {
    this.name = name;
    this.language = language;
    this.age = age;
    this.experiance = experiance;
  }
  public getAge() {
    return `Hello ${this.name}, you are ${this.age} years old `;
  }
}

const amaan = new Coder("Amaan Zaidi", 21, 0, "TypeScript");

console.log(amaan.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    experiance: number,
    age: number
  ) {
    super(name, age, experiance);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.language}`;
  }
}

const Ali = new WebDev("Mac", "Ali", 1, 21);

console.log(Ali.getLang());
console.log(Ali.getAge());

/////////////////////////
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
