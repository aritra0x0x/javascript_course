// The Fetch API is a promise-based API of JavaScript for making asynchronous HTTP requests in the browser similar to XMLHttpRequest (XHR).
// Unlike XHR, the fetch API is a simple and clean API that uses promises to provides more powerful features to fetch resources from the server. 
// Fetch API is standardized now and is supported by all modern browsers except IE.
//  The fetch() method only has one mandatory argument: the URL of the resource that we want to fetch.


// -----------------SYNTAX-----------fetch is asyncronoous--------
// fetch('url')
//    .then(response => {
//      // first promise
//    })
//    .then(err => {
//      // 2nd promise
//    });
// -----------------------------------------


// function getData(){
//     console.log("Started getData")
//     url = "bhatta.txt";
    
//     // fecth goes in background as it's asyncronous

//     fetch(url).then((response)=>{   
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData()
// console.log("After running getData")

//-------------GET-API------------------

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")

// HERE IF WE DO JSON THEN PARSE TO OBJECT OTHERWISE IN TEXT

//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// getData();

// -----------------POST-API-------------

function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry34748594","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

postData();