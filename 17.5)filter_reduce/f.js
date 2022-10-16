// filter an array with values that passes a test that create new array
let a=[1,2,3,0,4,14,10];
let a2=a.filter(value=>{
    return value<10
})
console.log(a2);

// reduce an array to single value

let b=[1,2,3,4];
let b2=b.reduce((v1,v2)=>{
    return v1+v2;
})
console.log(b2);