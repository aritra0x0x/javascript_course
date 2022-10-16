// it is object
// promise ->i give you chocolate
// resolve
// reject
// pending

var promise = new Promise(function(resolve, reject) { 
    const x = "bhatta"; 
    const y = "bhatta"
    if(x == y) { 
      resolve(); 
    } else { 
      reject(); 
    } }); 
  promise.then(function(){ 
  console.log('Success, You are a GENIOUS');}).catch(function () { 
  console.log('Some error has occurred');}); 
