// Now the idea of type script is to create strict types for type safe deveeloper experiance
//however ts does allow for genrics because sometime we dont know what type will be passed in
//function, type alias, class,interface and genric allow us to provide placehoder

const stringEcho = (arg: string): string => arg;
//now this function takes string as an arguemnt and return the arguement

//To generalise
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj({ isobj: true }));
console.log(isObj([1, 2, 3, 4, 5]));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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

//Redoing isTrue function using an interface

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

///////////////////////////////////////////

interface HasID {
  id: number;
}
//here we are making sure that the type must have id property
const processUser = <T extends HasID>(user: T): T => {
  return user;
};
console.log(processUser({ id: 9, name: "Amaan" }));

///////////////////////////////////////////////////////////////////////////////////////////
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("Amaan"); //here typescript is inferring T as string
console.log(store.state);
store.state = "Ali";
console.log(store.state);
//store.state = 12 ; this will throw an error
//here we are explicitly telling ts what type of t is going to be
const myState = new StateObject<(string | number)[]>([12, 13]);
myState.state = [12, "Amaan"];
