document.addEventListener("DOMContentLoaded",function(){   //or also can use load event
    
    
    function handleMouseOver(event){
        console.log(event);
}
document.getElementById("start").addEventListener("click",function handleclick() {
    document.addEventListener("mouseover",handleMouseOver)
})
document.getElementById("stop").addEventListener("click",function handleclick() {
    document.removeEventListener("mouseover",handleMouseOver)
})
// ---------------------------------------------------------------------------------

// document.addEventListener("keydown",function(event) {
//     console.log("keypress");
//     console.log(event.key);
//     if(event.key==2){
//         event.preventDefault();
//     }
// })

// document.addEventListener("keydown",function(event) {
//     console.log("keydown");
//     console.log(event.key);
//     if(event.key==2){
//         event.preventDefault();
//     }
// })

// document.addEventListener("keyup",function(event) {
//     console.log("keypress");
//     console.log(event.key);
//     if(event.key==2){
//         event.preventDefault();
//     }
// })
// ----------------------------------------------------------

document.getElementById("username").addEventListener("focus",function(event){
    console.log(event);
})
document.getElementById("username").addEventListener("blur",function(event){
    console.log("blur");
})

// -------event bubbling phase------subchild to parent(bubbles or propagets up to paerent)

document.querySelector(".parent").addEventListener("click",function (event){
    console.log("parent click");
})
document.querySelector(".child").addEventListener("click",function (event){
    console.log("child click");
})
document.querySelector("#subchild").addEventListener("click",function (event){
    console.log("subchild click");
    
})

// -----------------------------to stop prpagation-----------

// document.querySelector(".parent").addEventListener("click",function (event){
//     console.log("parent click");
// })
// document.querySelector(".child").addEventListener("click",function (event){
    //     console.log("child click");
    // })
    // document.querySelector("#subchild").addEventListener("click",function (event){
        //     console.log("subchild click");
        //     event.stopPropagation();
        // })
        
        // -------------event capturing (parent child)------------------------------------ 
        
        // document.querySelector(".parent").addEventListener("click",function (event){
            //     console.log("parent click");
            // },true)
            // document.querySelector(".child").addEventListener("click",function (event){
                //     console.log("child click");
                // },true)
                // document.querySelector("#subchild").addEventListener("click",function (event){
//     console.log("subchild click");
// },true)



document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.username);
    console.log(e.target.username.value);
})

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    const form= e.target;
    const mobile= parseInt(form.mobile.value);
    if (mobile.toString()== NaN.toString()) {
        alert("invalid");
    }
    console.log(mobile);

})
})




