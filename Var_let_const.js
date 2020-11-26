//Redeclaration allowed 
//disadvant. as it will take latest var
var x = 56;
var x = "abcd";

console.log(x);
console.log(typeof x);

//var is function scoped or global
function add()
{ 
    //cd is function scoped here
    var cd = "she";
}

//Var can be hoisted, let cannot be
console.log(age);
var age = 67;

/* can't redeclare in let using same var. 
/this will throw error that y has been alredy declared
let y = 12;
let y = "erf";

console.log(y);
console.log(typeof y); */

//No mutation allowed
//const z = true;
//z = false;

//Block scoped : let and const
function add1()
{
    var cd = "she1";

    if(cd == "")
    {
        //x1 is blocked scoped only up to this if block
        let x1 = 234.5;
    }
}
