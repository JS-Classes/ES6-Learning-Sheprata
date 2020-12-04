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
function numrange(m,y,range=10){
for(let i =m; i<y; i++) {
    console.log(`${i}`);
    for(let x = 1; x<=range; x++)
    {
        let mul = m*x;
        console.log(`${i}*${x}=${mul}`);
    }
}}

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