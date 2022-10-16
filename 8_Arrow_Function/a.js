// const a =function bh(){
//     console.log("a");
// }
// a();

// const b =function (){
//     console.log("b");
// }
// b();

// const c =function (){
//     return "c";
// }
// console.log(c());

// ARROW FUNCTION

const d = ()=>{
    console.log("d");
}
d();

const e =()=>{
    return "e";
}
console.log(e());

// One liners do not require braces/return
// one line will automatically return
const e1 =()=>
     "e1";

console.log(e1());

// object ARROW 

const F = () =>  ({name: "F"});
console.log(F());

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const G = (name) =>  "alphabet is "+ name;
console.log(G("g"));