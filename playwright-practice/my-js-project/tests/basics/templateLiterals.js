// backtick (``)

// Case 1: Printing multiple lines together :

let message =`Welcome to NLTECH trainings
              and I am undergoing 
              Javascript sessions`;

console.log(message);

// Case 2: 

let data ='Hi It\'s my JS Sessions';

console.log(data);

// Case 3: backticks are used with placeholders

let empName ="Nishant";
let age=30;

console.log("Name is : "+empName + " And age is : "+age);

console.log(`Name is : ${empName} and Age is : ${age}`);

//No Need for Escape Characters
// The old way -- escaping is annoying
let m1 = 'it\'s my code';
let p1 = "it\"s my code";

console.log(m1);
console.log(p1);

// The template literal way -- clean and simple
let mg = `hi it's my code`;
console.log(mg);

//Variable Interpolation with ${}
let empname = 'Tom';
let age1 = 30;
// Old way (string concatenation)
console.log('hey ' + empname + ' and your age is ' + age1);
// Template literal way (much cleaner)
console.log(`hey ${empname} and your age is ${age1}`);

//Expression Evaluation Inside ${}
let a = 100;
let b = 200;
console.log(`the sum is: ${a + b}`); // 300
console.log(`${a}, ${b}`); // 100, 200

let age2 = 37;
console.log(`is adult: ${age2 >= 18 ? "yes" : "no"}`);

