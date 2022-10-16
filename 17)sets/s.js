

// Set stores unique values
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like :',mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:',mySet);

// Use a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:',mySet2);


console.log(mySet.size); // Get the size of the set

console.log(mySet.has(346)); // Check whether set has 346 or not

console.log('Before removal', mySet.has('that2'));
mySet.delete('that2'); // Remove an element from the set
console.log('After removal', mySet.has('that2'));


// Iterating a set
// for(let item of mySet){
//     console.log('Item is  :', item );
// }

mySet.forEach((item)=>{
    console.log('Item is  :', item );
})



console.log(" Quiz: Can you use Array.from(mySet) to convert set into an array?");
// step-1 Make an Array named Arr-
let Arr = [45, 'this', false, 'this'];
console.log(Arr);

//  step-2 convert an array to set using new keyword 
let mySet1 = new Set(Arr);
console.log(mySet1);

//step-3 convert a set into an array
let Array1 = Array.from(mySet1);
console.log(Array1);