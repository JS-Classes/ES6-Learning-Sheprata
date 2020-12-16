const authors = ["rima", "sheprata","swechchchhhhha"];
authors.push("sima");
console.log(authors);
authors.pop("sima");
console.log(authors);

console.log(authors.length);
let f = authors[0];
let l = authors[authors.length-1];

authors.shift("rima");
authors.unshift("dhriti");
console.log(authors);

authors.splice(2,1);
let isThereAnyNamesStartingWithB = authors.some(x => x.startsWith("B"));
let areAllNamesStartingWithB = authors.every(x => x.startsWith("B"));
console.log(authors);

let sum = (x,y,z) => x+y+z;

let numbers = [3,4,5,6,7,8,9];

sum(numbers[0],numbers[1],numbers[2]);
console.log(sum(...numbers));

const allNumbers = [34, 45, ...numbers, 12, 3];



