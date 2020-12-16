// Program to print multiplication num
//up to some Range(default shud be 10)
//multiplication from numbers - m to n

// 1. Program to print multiplication table for a number
function printmultiplication(number) {
    console.log(`multiplication of ${number}`);
    for(let i= 1; i<=10; i++)
    {
        let result = number* i;
        console.log(`${number} * ${i} = ${result}`);
    }
}
printmultiplication(2);

// 2. Program to print multiplication table for a number upto some range (default should be 10)
function printmultiply(num,range=10)
{
    console.log(`Up to range = ${range}`);
    for(let i = 1; i <= range; i++) {
        let product = num*i;
        console.log(`${num} * ${i} = ${product}`);
}
}
printmultiply(2,7);

// 3. Program to print multilication table for numbers from m to n.
function numberRange(k,j,range=10) {
    for(let i = k; i<=j; i++)
    {
        console.log(`multiplication of ${k} up to range ${range}`);
        for(let y = 1; y<=range; y++)
        {
            let result = k * y;
            console.log(`${k}*${y}=${result}`)
        }
        k++;
    }
}
numberRange(2,4,5);

const people = [
    { name: 'Sheprata', dob: '234234', isMale: false},
    { name: 'Swechchha', dob: '234544', isMale: true},
];

//todo
//console.table(people);
//process.write('dd);
//ProcessingInstruction.name('ss');


//write a string variable with pragrph as value
//a no. of sentences, words and word characters
//no. of special characters
//no. of vowels and consonants
//str.charAt(i) === " "

let pragrph = `The fes!tival is ob@served for a fortnight.
The first nine days are called Navaratri. 
The goddess Durga is worshiped on these days.
People worship the image of the goddess in their houses.
They also visit the temple of the gods and goddess.`;
let pragrphObj = new String(pragrph);

function countSentences(pragrph){
  console.log(`Number of sentences splited by decimal are ${(pragrphObj.split(".").length-1)}`);
  console.log(`Number of words splited by space are ${(pragrphObj.split(" ").length)}`);
  //let word  = new String(pragrph);
  let word = pragrphObj.split(" ");
  const wordarray = Array.from(word);
  //console.log(`no. of words ${wordarray}`);
    for (let i = 0; i < word.length; i++) {
    console.log(`In ${i+1} position of word : there are ${wordarray[i].length} characters`);
    }
}

countSentences(pragrph);


function countSpecialCharacters(pragrph){
    let specialchar = ["@","!","."];
    let count = 0;
    for(let i = 0; i < pragrph.length; i++){
        if(pragrph.includes(specialchar[i])){
          console.log(`There is special charc ${specialchar[i]} `);
        };
        count++;
    }
}

  countSpecialCharacters(pragrph);

  

  countVowelsConsonants(pragrph);

  function countVowelsConsonants(pragrph){
    const count = pragrphObj.match(/[aeiou]/gi).length;
    console.log(`count of vowel is ${count}`);
  }

  countVowelsConsonants(pragrph);

  //find normal distribution from set of random numbers
//f(x)= 

Number = [1,2,3,4];
function normaldistribution(number)
{
  
}

//find a random no between provided m to n

let getRandom = (m,n) => m + Math.random() * (n-m);

console.log(getRandom(10,20));

//Find a random string of particular length
//0-9 a-z'

function randomString(length){
for (let i = 0; i < array.length; i++) {
    //use ascii
    
}
}

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}


//do same randomstring with another approch

