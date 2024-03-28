let a = "amaan";
// error since you can only assign a to string a = 6;
let meaningOfLife: number;
let isLoading: boolean;
let album: any; //this means we can store any type of value in here
let win: string | number; // win can be either number or string
a = "united";
// error :  isLoading = 5;
isLoading = true;
meaningOfLife = 22;
album = 10;
album = "One Direction";

/*const sum = (a, b) => {
  return a + b;
};*/
//here the error occur because typescript is not able to infer the type of a and b so it is assiging
// any type to both of them because the plus symbol can be used for both addition and concatenation

const sum1 = (a: number, b: string) => {
  return a + b;
};
//here typescript can infer input parameter can be number and string and output wil be string

const sum2 = (a: number, b: number) => {
  return a + b;
};
