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