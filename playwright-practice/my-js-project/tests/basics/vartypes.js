// let a=10; // global variable 

// console.log(a); // 10

function test()
{
    let a=20; // local variable
   // console.log(a); // 20

    if(true)
    {
        let a=30;
       // console.log(a); // 30
    }
   console.log(a);
}



// test(); // way to call the function
// console.log(a);

// Redeclration:

var number=10;

var number=20; // No errrs, var allows redeclaration

let number1=10;

let number1=20; // No errrs, var allows redeclaration

console.log(number); // SyntaxError: Identifier 'number' has already been declared

// Re-Assignment :

let c=20;

c=30; // reassigning is allowed in var and let both

console.log(c);

// Hoisting : using or utilizing the variables even before they are defined.

// console.log(e); // undefined
// let e=100; //  ReferenceError: Cannot access 'e' before initialization

// let empname;
// console.log(empname); // undefined

// Defining thing with "const" keyword:

// const t2=100;
// console.log(t2);

// t2=200; // TypeError: Assignment to constant variable.
// console.log(t2);

// re-decrlation with const :

// const q=20;
// q=30; // SyntaxError: Identifier 'q' has already been declared

// const number; // SyntaxError: Missing initializer in const declaration
// number=20;

// is hoisting allowed with const ??

// console.log(num); // ReferenceError: Cannot access 'num' before initialization
// const num=100;



// var a=20;
// let a=20; // SyntaxError: Identifier 'a' has already been declared

