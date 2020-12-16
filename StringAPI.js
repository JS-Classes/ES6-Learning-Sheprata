//Long string literal

let longString1 = "This is sentence, This is sentence.\
This is sentence,is is sentence.\
is is sentence,is is sentence.";

let longString2 = `This is sentence, This is sentence.
This is sentence,is is sentence.
is is sentence,is is sentence.`;

let sentence = "This is sentence dummy type";
let sentenceObject = new String(sentence);

//String APIs
console.log(sentence.charAt(10));
console.log(sentence.charCodeAt(11));
console.log(sentence.concat('10'));
console.log(sentence.startsWith('This'));
console.log(sentence.endsWith('This'));
console.log(sentence.includes('the'));
console.log(sentence.indexOf('t'));
console.log(sentence.lastIndexOf('t'));
console.log(sentence.repeat(5));
console.log(sentence.replace("s"));

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(sentence.split(' '));

console.log(sentence.substr(0 , 5));
console.log(sentence.substring(0,5));


