// there are two types of increment and decrement operators :

// 1. Pre Increment and Pre-Decrement Operator :

//   // 1.1. Pre-Increment : ++i ( It says increment the value of a first and then assign it)

  let a=10; // initial value of a is 10
  let b=++a;  // ++a ==> 10+1 ==> 11 

  console.log(a, b);


let m=-99;  // initla value of m is -99
let n=++m;  // -99+ 1==> -98

console.log(m,n);

let total1=1000;

console.log(total1++); console.log(total1);
console.log(++total1);

let s='5';

console.log(++s);


// 1.1. Pre-Decrement : --i ( It says decrement the value of a first and then assign it)

  let a=10; // initial value of a is 10
  let b=--a;  // --a ==> 10-1 ==> 9 

  console.log(a, b);

// let m=-99;  // inital value of m is -99
// let n=--m;  // -99- 1==> -100

// console.log(m,n);

// let total=1000;

// console.log(--total);

// let s='5';

// console.log(--s);


// 1. Post Increment and Post-Decrement Operator :

  // 1.1. Post-Increment : i++ ( It says assign the value first and increment the value of a later on)

  let a=10; // initial value of a is 10
  let b=a++;  // b==> 10, a++ ==> 10+1==> 11 

  console.log(a, b);


let m=-99;  // initla value of m is -99
let n=m++;  // -99+ 1==> -98

console.log(m,n);

// let total=1000;

// console.log(total++);
// console.log(total); 

let s='5';

console.log(s++);
console.log(s);




  // 1.1. Post-Decrement : i-- ( It says assign the value first and decrement the value of a later on)

  let a=10; // initial value of a is 10
  let b=a--;  // b==> 10, a-- ==> 10-1==> 9 

a=a-1;

  console.log(a, b);


// let m=-99;  // initla value of m is -99
// let n=m--;  // -99- 1==> -100

// console.log(m,n);

 let total=1000;

console.log(total--);
console.log(total); 

let s='5';

console.log(s--);
console.log(s);