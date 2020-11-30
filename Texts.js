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
