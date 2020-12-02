// About string- ascii, unicode, ctrl, tab
//String literal
let hackathon = 'Hackathon 2020' + 12;

//let name = `\`Cotiviti\` ${hackathon}`;
let name = `Cotiviti ${hackathon}
Cotiviti ${hackathon}`;

let sum = `Cotiviti ${12+34-56}`

console.log(name);
console.log(sum);

//use case in ternary operatr ? :
let x = "X";
let y = "Y";
let isMale = true;

let z = `${isMale ? x : y}`;

console.log(z);


//regular exp
let b = "23 0678 sdd dggt uue eh gs123";

// \d represents 0-9
//let re = /[0-9]/;
let re2 = /sd/;
//let re1 = new RegExp('[0-9]');

let a = b.match(re2);

//let d = e.matchAll(re2)

console.log(a);

let message = "With some of the higher educational institutions being leaders in excellent teaching and research activities. With some of the teaching staff that have been awarded with Nobel prizes.";
let regexVowels = /[aeiou]/gim; //a or b or c any character
let matches =message.match(regexVowels);

//\b\w{3}\b - boundary word

console.log(matches);


