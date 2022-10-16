

let people = ["bhatta", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }


// 1. ITERATING AN OBJECT
let obj = {
    name: "bhatta" 
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
console.log("*****************For in loop starts here**************")
myString = "hi";
for (let char in myString){
    console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log("*****************For of loop starts here**************")
people = ["bhatta"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}

console.log("=========foreach===========");
// calls a function once for each array element

const array=["a","c"];
// array.forEach(element => {
//    console.log(element); 
// });
array.forEach(function(value,index,array){
    console.log(value);
})
