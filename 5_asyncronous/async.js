//asyncro that which run on background 

setTimeout(() => {
    for (let index = 0; index < 10; index++) {
        console.log(index);
        
    }
}, 10);
console.log("it run before setT as it is assyncronous behaviour");

