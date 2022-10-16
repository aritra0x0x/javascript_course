

let regex = /bhatta/;
// Lets look into some metacharacter symbols
regex = /^barrdc/; // ^(carot symbol) means expression will match if string starts with
regex = /bhatta$/; // $ at the end of the string means "string ends with"
regex = /b.hatta/; //matches any one character
regex = /b*hatta/; //matches any 0 or more characters
// regex = /bh?atti?a/; //? after character means that character is optional
regex = /b\*hatta/

let str = "b*hatta means codewith"; 
// let str = "bhatta means codewith"; 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
