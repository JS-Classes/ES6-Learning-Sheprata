let text = `Size of this image is 20 and num 10
If you like sports is 20 and num 10
daylight ranges is 20 and num 10
In the evenings is 20 and num 10
matches of the local is 20 and num 10
matches of the local is 20 and num 10
matches of the local is 20 and num 10
matches of the local is 20 and num 10
matches of the local is 20 and num 10
matches of the local is 20 and num 10`;

let emails = "abc@xyz.com a2bc@xyz.net ab3c@xyz.np";

//find matching numbers in a prgragh using regex

let regexNum = /\d+/g; //+, *, ?   
let matches =text.match(regexNum);

//\b\w{3}\b - boundary word

console.log(matches);

// + - one or more , * - zero or more
let regexEmail = /[a-z]+\w*@[a-z]+.(com|net)/g;
let correctEmails = emails.match(regexEmail);
console.log(correctEmails);






