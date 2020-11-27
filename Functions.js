/*addTwoNumbers - camel case
pascal case - */

function square(number)
{
 let squared = number * number ;
 return squared;
}

let s = square(345);
console.log("Value of s - " + s);

//function expression with name : function is assigned to variable at the beginning itself
var r =  function funexp(num)
{
    let r1 = num ;
    return r1;
}

let s2 = r(1);
console.log("Function exp : Value of s - " + s2);

//anonymous function - no name
var fun1 = function (number)
{
    let sqr = number * number;
    return sqr;
}
let s1 = fun1(245);
console.log("Anonymous function : s1 - " + s1);

//Arrow function
(number) =>  number * number;

//assign to var for arrow fun
var fun2 = (number) => number * number;

//arrow function - passing arguments in func
(a,b) => {
    let sum = a+b;
    return sum;
}

//Closure function
/*public func needs some implementation
which has private func as well, structional form*/
//Example 1
function outside(x) {
    function inside(y) {
        return x + y; //preserves x value at first
    }
    return inside;
}

let inside_fn = outside(10); //x
let result = inside_fn(40); //y
console.log(result);

// Example 2
function addSquares(a, b)
{
    function sqaure(x) {
        return x * x;
    }

    let result = square(a) + square(b);
    return result;
}

let r1 = addSquares(3453, 342);

//Example 3
let createPet = function(name) {
    return {
        setName: newName => name = newName,
       /* setName: function (newName) {
            name = newName;
        },*/
        getName: () => name
      /*  getName : function(){
            return name;*/
        }
    }

let dog = createPet('diamond');

//Parameters
function formatName(salutation, name, address){
  let completeName = salutation + ", " + name + ", " + address;
  return completeName;
}

let n = formatName("Miss","Sheprata","Kathmandu");
let n1 = formatName("Sheprata","ktm");
console.log(n1);

//Rest function - ...moreArgs stores in array 

function add(a,b, ...moreArgs){
    console.log(a);
    console.log(b);
    console.log(moreArgs);
}

add(23,25);
add(23,25,56,57,78);