// number : any integer or decimals numbers

let a=10;

let b=12.33;

console.log(a,b);
console.log(typeof (a));
console.log(typeof b);

// size to store the 10 or 12.33 value in the memory of nodejs is 8 Bytes
// 1 byte == 8 bits so 8 bytes ==> 8*8 ==> 64 bits

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// string : we can store anything in string with double or single quotes

let userName="Anthony";
let browser='Chrome'

let num="100";

console.log(userName, browser, num);

console.log(typeof num);

console.log("**************************");

let pest ="";
console.log(typeof pest);
console.log(pest);

console.log(100 + 200);

// size : string is combination of multiple characters :
// every character take 2 bytes of mmeory to the value
// 14 bytes 

// c. boolean : true or false

let flag=true;
let falg2=false;
console.log(flag);

console.log(typeof flag);

// size : 1 byte 

// 4. undefined : 

let x;
console.log(x);

console.log(typeof x); // undefined

// size : for storig the undefined value JS usualy takes 0-4 bytes of memory

// 5. null

let y=null;
console.log(y);

console.log(typeof y);// object

// size : it may takes from 0-4 bytes of memory

let p=10;
console.log(typeof p);
// p="Nishant";

console.log(p);

console.log(typeof p);

// 6. bigint : 
let s=345678954567896567n; // SyntaxError: Invalid or unexpected token
console.log(s);

console.log(typeof s); // bigint