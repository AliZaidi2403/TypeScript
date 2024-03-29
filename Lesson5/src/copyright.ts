// original js code

//const year = document.getElementById("year");
//const thisYear = new Date().getFullYear();
//year.setAttribute("dateTime", thisYear);
//year.textContent = thisYear ;

// 1st variation
// we already know what ts is inferring for year so we explicitly implies it
//let year: HTMLElement | null;
//year = document.getElementById("year");
//let thisYear: string;
//thisYear = new Date().getFullYear().toString();
//now we have to use the type guard since thisyear can be possibly null
//if (year) {
//  year.setAttribute("dateTime", thisYear);
//  year.textContent = thisYear;
//}

// 2nd variation
let year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
