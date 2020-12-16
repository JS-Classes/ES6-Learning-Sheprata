let x = new Date();

Date.now();
console.log(x);

console.log(x.getMonth());
console.log(x.getFullYear());
x.getHours();
x.getDay();
x.getMinutes();
x.getMilliseconds();

//digital clock

let getTimeDigitally = () => {
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let seconds = now.getSeconds();
let ms = now.getMilliseconds();
let meridiem = "AM";
let hourNormalized;

if(hour >= 12)
{
 meridiem = "PM";
}

hourNormalized = hour > 12 ? hour - 12 : hour;

return `${hourNormalized}:${minute}:${seconds}:${ms} ${meridiem}`;
};



//calling function every second using setInterval
/*setInterval(() => {
    console.clear();
    console.log(getTimeDigitally());
}, 1000);*/

//find age of the person: X years Y months Z days

/*function(expect dateofbirth as a string or dateobject)
output - x-years y months -z days
dateofyear ko sub19930805*/

//find yer month date 
function findAge(dob) {
    let dateToday = new Date();
    let yearToday = dateToday.getFullYear();
    let birthYear = dob.substring(0, 4);
    console.log(`birthyer ${birthYear}`);
    let difference = yearToday - birthYear;
    console.log(difference);
}

findAge("20110607");


