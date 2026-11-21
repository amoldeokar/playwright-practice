//Check type of different values
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof "");
console.log(typeof " ");
console.log(typeof null);
console.log(typeof { name: "John", age: 30 });
console.log(typeof [1, 2, 3]);
console.log(typeof function() {});
console.log(typeof Symbol("symb"));
console.log(typeof BigInt(12345678901234567890n));
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof new Date());
console.log(typeof /regex/);


// Check type of different variables
let a=10;
console.log(typeof a);

let b="Hello";
console.log(typeof b);

let d;
console.log(typeof d);

let e=3.14;
console.log(typeof e);


console.log(typeof(5+"3")); // string
console.log(typeof(5-"3")); // number
console.log(typeof(5*"3")); // number
console.log(typeof(5/"3")); // number
console.log(typeof(5%3)); // number
console.log(typeof(5**3)); // number
console.log(typeof(5==3)); // boolean
console.log(typeof(5!=3)); // boolean
console.log(typeof(5>3)); // boolean
console.log(typeof(5<3)); // boolean
console.log(typeof(5>=3)); // boolean
console.log(typeof(5<=3)); // boolean
console.log(typeof(5===3)); // boolean
console.log(typeof(5!==3)); // boolean
console.log(typeof(5&&3)); // boolean
console.log(typeof(5||3)); // boolean

console.log(5+"3"); // 53
console.log(5-"3"); // 2
console.log(5*"3"); // 15
console.log(5/"3"); // 1.6666666666666667
console.log(5%"3"); // 2
console.log(5**"3"); // 125
console.log(5=="3"); // false

let y=30;
//let y=40; // SyntaxError: Identifier 'y' has already been declared
console.log(y);

const z=50;
z=60; // TypeError: Assignment to constant variable.
console.log(z);



{
  var m=100;
  let n=200;
  const c=300;
}

console.log(m);   //100
console.log(n);   //ReferenceError: n is not defined
console.log(c);   //ReferenceError: c is not defined

console.log(p);  //undefined
var p=1000;

console.log(q);  ///ReferenceError: Cannot access 'q' before initialization
let q=2000;   

console.log(A.charCodeAt(0)); // 65
console.log('$'.charCodeAt(0)); // 3
console.log("Hello".charCodeAt(1)); // 101

console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

let char1='A';
let char2='B';
console.log(char1.charCodeAt(0)-char2.charCodeAt(0)); // -1

console.log("5" + 3); // "53"
console.log(5+"3"); // "53"
console.log("5"-"3"); // 2
console.log("5"+"3"); // "53"

console.log(10+20); // 30
console.log("10"+20); // "1020"

console.log(10+20+"30"); // "3030"
console.log("10"+20+30); // "102030"

console.log(10+20+"30"+40); // "303040"
console.log("10"+20+30+"40"); // "10203040"
console.log("2"*3); // 6


let p=5;
console.log(p++); // 5   // Post-increment: returns the value of p, then increments p
console.log(p); // 6
console.log(++p); // 7   // Pre-increment: increments p, then returns the value of p


console.log(p--); // 7   // Post-decrement: returns the value of p, then decrements p
console.log(p); // 6
console.log(--p); // 5   // Pre-decrement: decrements p, then returns the value of p