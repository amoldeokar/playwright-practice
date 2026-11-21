//Javascript conditional statements and comarision operators 

const { truncate } = require("node:fs/promises");

console.log(10==10);// true

let a=100;
let b=200;

// a>b or b> a , a==b

if(a>b) // false
{
    console.log("a is greater than b");
}
else
{
    console.log("a is not greater than b");
}   

let c=100;
console.log(a===c); // true

if(true)
{
    console.log("This is true");  //always executed because the condition is always true.
}
else
{
    console.log("This is false");    /// color change of statement: Unreachable code detected. that means this code will never be executed because the condition is always true.
}

let isTestPassed=true;
if(isTestPassed)
{
    console.log("Test is passed");  //always executed because the condition is always true.
}
else
{
    console.log("Test is failed");  //coldr didn't change because the condition is not always true. It depends on the value of the variable isTestPassed.
}


let message = `I am learning Javascript
And i am learning conditional statements and comparison operators.
Next i will learn about loops in Javascript.    `;

console.log(message);


//== Loose equality check (only values are compared)
let n1=10;
let n2='10';
console.log(n1==n2); // true

//=== Strict equality check (both values and datatypes are compared)
let n3=10;
let n4='10';
console.log(n3===n4); // false

console.log(typeof n4); // string
console.log(typeof n3); // number

console.log(true ==1); // true
console.log(true ===1);// false

//special case of comparison operators: null and undefined
console.log("" == 0); // true
console.log("" === 0); // false
console.log(typeof null); // object
console.log(typeof ""); // string;
console.log(typeof undefined); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

if(null==undefined)
{
    console.log("they are loosly equal"); // executed because the condition is true.
}else
{
    console.log("they are not loosly equal"); // not executed because the condition is false.
}   

let browserName="Chrome";
if(browserName==="Chrome")
{
    console.log("This is Chrome browser"); // executed because the condition is true.
}
else if(browserName==="Firefox")
{
    console.log("This is Firefox browser"); // not executed because the condition is false.
}
else if(browserName==="Edge")
{
    console.log("This is Edge browser"); // not executed because the condition is false.
}
else
{
    console.log("This is some other browser"); // executed because none of the previous conditions are true.
}
