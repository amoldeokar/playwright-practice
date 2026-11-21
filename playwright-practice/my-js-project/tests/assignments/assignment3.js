function checkVowels(str) {
	return str.match(/[aeiou]/gi) || [];
}

console.log(checkVowels("Playwright")); // ["a", "i"]
console.log(checkVowels("HELLO"));      // ["E", "O"]
console.log(checkVowels("rhythm"));     // []


//  Check if a string contains only vowels
function isOnlyVowels(str) {
    return /^[aeiou]+$/i.test(str);
}

console.log(isOnlyVowels("aeiou")); // true
console.log(isOnlyVowels("HELLO")); // false


let i=11;

i = i++ + ++i;

console.log(i); // 24



let a=11;
let b=22;
let c;

c = a+b+ a++ + b++ + ++a + ++b;
console.log(c); // 11 + 22 + 11 + 22 + 13 + 24 = 103
console.log(a); // 13
console.log(b); // 24

let m=0;

m = m++ - --m + ++m - m--;
console.log(m); // 0 - 0 + 1 - 1 = 0


let p=true;
console.log(p++); 
console.log(!p); 

console.log(!!p); 

console.log(!p && p); 

console.log(!p || p);

console.log(p++);
console.log(p);


let n=11;
let j = --(n++);  //SyntaxError: Invalid left-hand side expression in prefix operation
console.log(j);  
console.log(n);   

 let x=0; let y=0;
 let z = --x * --y * y-- * x--;    
 console.log(z); 

 let l=1;
 l = l++ + ++l * --l - l--; // 2 + 3 * 2 - 2

 console.log(l);

 let k = 11++;
 console.log(k);


 let ch="A";
 console.log(ch++);

  console.log(++ch);


  let d=1.5;
  let D = 2.5;

  console.log(d++ + ++D); //1.5 + 3.5 = 5
