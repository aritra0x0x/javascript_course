

// Character Sets - We use []
let regex = /b[a-z]atta/; // can be any character from a to z
regex = /b[atyh]atta/; // can be an a, t or y or h
regex = /b[^aty]atta/; // cannot be any of a, t or y 
regex = /b[^aty]att[AayYu]/; // cannot be any of a, t or y + can be A a u or y
regex = /b[a-zA-Z]atta[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /bha{2}a/; // a can occur exactly 2 times
regex = /bha{0,2}a/; // a can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(bha){2}([0-9]t){3}/

// const str = "hirry9 bhai";
str = "bhatta bhai"
str = "bhabha1t4t5t bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
