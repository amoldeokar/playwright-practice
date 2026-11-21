// Template literals with backsticks ``

const { getCurrentEventLoop } = require("node:ffi");

let msg1 = `He said, "I'm  learning 'JAVASCRIPT'"
  She replied, "ohh!!! That's great!"`;

console.log(msg1);


let path1 = `C:\\Users\\Documents\\file.txt`;
let path2 = `C:\Users\documents\file.txt`;
let path3 = `C:\Users\documents\File.txt`;
console.log(path1);
console.log(path2);
console.log(path3);


//Template literals with placeholders
let userName='Alice';
let score=95;
console.log('User:'+userName + ', Score:'+score);
console.log(`User: ${userName} , Score:${score}`);

let product='Laptop';
let price=1200;

console.log(`The ${product} costs $${price}`);

let firstName='Amol';
let lastName='Deokar';
console.log(`FullName:${firstName} ${lastName}`);


//Expressions in Template literals
let x=25;
let y=4;
console.log(`The sum of ${x} and ${y} is ${x+y}`);

let length=10 , width=5;
console.log(`Area : ${length*width}`);
console.log(`Perimeter : ${2* (length+width)}`);


let n1=50,n2=30;

console.log(`${n1}+${n2} == ${n1+n2}`);
console.log(`${n1}-${n2} == ${n1-n2}`);

console.log(`${n1+n2} == ${n1+n2}`);
console.log(`${n1-n2} == ${n1-n2}`);

console.log(`Average: ${(n1+n2)/2}`);


//Nested Template literals
let isLoggedIn=false;
let userName1='testUser';

console.log(`Status: ${isLoggedIn ? `Welcome ${userName1}` :'Please login'}`);

let temp=15;

console.log(`Weather: ${temp>30 ? 'Hot' : temp > 20 ? 'warm':'cold'}`);
console.log(`Temprature: ${temp}\u00B0C`)
console.log(`Temperature: ${temp}°C`);


let baseURL="https://www.example.com";
let endpoint = '/api/users';
let userId = 123;

console.log(`FullURL:${baseURL}${endpoint}\\${userId}`);

console.log(`FullURL:${baseURL}${endpoint}/${userId}`);


