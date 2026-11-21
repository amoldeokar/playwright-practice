let browser=" CHROME   ".trim().toLowerCase();

switch(browser){
    case "chrome":
        console.log("You are using chrome");
        break;
    case "firefox":
        console.log("You are using firefox");       
        break;
    case "safari":
        console.log("You are using safari");                    
        break;
    default:
        console.log("You are using unknown browser");                    
}


let isLoggedIn=true;

switch(isLoggedIn){
    case true:
        console.log("User is logged in");
        break;
    case false:
        console.log("User is not logged in");       
        break;
    default:
        console.log("Unknown login status");                    
}

let stringValue="Hello World";

//program to check the vowles and consonants in a string

let vowels = "aeiou";

for(let i=0;i<stringValue.length;i++){
    let char=stringValue[i].toLowerCase();
    if(vowels.includes(char)){
        console.log(`${char} is a vowel`);
    } else {
        console.log(`${char} is a consonant`);
    }
}
