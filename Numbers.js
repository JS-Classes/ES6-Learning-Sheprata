const a = 2344;

// for binary number - the first prefix is 0b and '0' '1'
const b = 0b010101;

//for octal
const c = 0o3455;

//for hexadecimal 10 - A to F
const d = 0x12AF;

//Number API

let age = "67";

//globally avaiable to call 
let ageNummber = parseInt(age);

//else use Number object as this has no. of methods
let ageNumber1 = Number.parseInt(age);
let ageNumber2 = Number.parseFloat(age);

console.log(typeof NaN);

let de = Number.isNaN();
Number.isInteger();
Number.isFinite();


//Maths API
Math.abs(-89);
Math.pow();
let r = Math.random(); // from 0 inclusive -1 exclusive
console.log(r);

//find sd of set of no.
// A and B :10L average mean salary
// A, sd = 3
//B , sd = 10


let  GetSD = (numbers) => {
  let sum = 0;
  const numberofItems = numbers.length;
  for (const num of numbers) {
      sum = sum + num ;
  }
  const mean = sum / numberofItems;

  //finding sum(x-mean)^2
  let sqrDiffSum = 0;
  for (const num of numbers)
  {
      let diff = num - mean;
      let sqrDiff = Math.pow(diff,2);
      sqrDiffSum += sqrDiff;
  }

  //finding sd
  const sd = Math.sqrt(sqrDiffSum/ numberofItems);
  return sd;
}

const ages = [23,32,57,21,56,43,89];
let sdAges = GetSD(ages);
console.log(`sd of ages: ${sdAges}`);