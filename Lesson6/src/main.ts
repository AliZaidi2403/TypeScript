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

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return ` ${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist("Jimmy", "Guitar");
console.log(page.play("play"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
console.log(Peeps.count);
const John = new Peeps("John");
console.log(Peeps.count);
const Amy = new Peeps("Amy");
console.log(Peeps.count);
const Steve = new Peeps("Steve");
console.log(Peeps.count);

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Invalid data sent as parameter");
    }
  }
}

const Band1 = new Bands();
Band1.data = ["Amaan", "Zaidi"];
console.log(Band1.data);
