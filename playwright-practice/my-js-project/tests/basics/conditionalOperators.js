// conditional operators : ==> >, <, >=, <=, == , !

console.log(10==10);//

let a=100;
let b=200;

// a>b or b> a , a==b

if(a>b) // false
{
    console.log("A is greater then B " +a);
}
else
{
    console.log("B is greater then A " +b)
}

// anti patterns or wrong way of writing the code :


let flag=false;

if(flag)
{
    console.log("Pass"); // Unreachable code detected.
}
else
{
    console.log("Fail"); // Unreachable code detected.
}

// == (double equal operator, loose equality check but only the values are compared) 
// and ===(triple equal, strict equality check both values and datatypes are compared)

let n1=10;
let n2='10';

console.log(n1==n2); // true
console.log(n1===n2); // false

console.log(typeof n2); // string
console.log(typeof n1); // number

console.log(true ==1); // true
console.log(true ===1);// false

console.log(typeof true); // boolean