// We use the async keyword with a function to represent that the function is asynchronous. 
// The async function always returns a promise.

async function bhatta(){
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "harry";
}

console.log("Before calling bhatta")
let a = bhatta();
console.log("After calling bhatta")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")