// No matter how great we are at programming, sometimes our code has errors. 
// They may occur because of unexpected user input and for a thousand other reasons. 
// Usually, a code immediately stops executing in case of an error, printing it to console. 
// But we can solve this problem by using the try..catch statement. 
// It allows us to "catch" errors so the script can do something more reasonable instead of stopping. 
// Before we learn about error handling statements, let us see about the types of errors in programming.
// 1)syntax error->This is the error in the syntax.
// 2)runtime error->The runtime error occurs during the execution of the program.


// error in error handling types 

// TypeError = occurs when a variable or parameter is not of a valid type.
// SyntaxError = occurs when there is an error in syntax.
// ReferenceError = occurs when there is an invalid reference.
// EvalError= occurs when there is an error in global function.
// RangeError=  occurs when a numeric variable or parameter is outside of its valid range.

// Pretend this is coming from a server as response
let a = "alia bhatta  bhai";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}


try {
    null.console
    console.log("We are inside try block");
    
    functionbhatta();
    
} catch(error) {
    console.log(error)
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log("Finally we will run this")
}