// ajax-->asyncr js and xml
// not a programming LockManager.rather it's a set of existing technologies.
// helps in fetching data without interfering with the existing page.
// no page relod/refresh.
// modern websites use json instead or xml for data TransformStream. 

// why use.
// no reload/refresh.
// saves network bandwith.
// very interactive.

// how it works
// ajax use xmlhttpRequest object(also called xhr object) to achieve this
// modern websites use json instead or xml for data transfer
// data can be transferred in any format and protocol(not always https necessarily)
// load->open->send

// json,stringify->conv into string text
// json.parse->into js object
document.getElementById("fetchBtn").addEventListener("click",function(element){
element.preventDefault();
   console.log("you have clicked");
    // initianiaze an object
    const xhr = new XMLHttpRequest();
    // open the object

    xhr.open('GET','a.txt',true);  //get->give the url and get the detail,post->give the url with data and get the detail,a.txt->where to fetch,true->asyncronous(non block)
    


    // what to do on progress(can use or not optional)
    xhr.onprogress=function(e){
        console.log("onprogress");
    }
    // --------------old method of onload----------------------------------------
//   xhr.onreadystatechange=function(){
    // if (xhr.readyState==4 && xhr.status==200)
    //  {document.getElementById("a").innerHTML= xhr.responseText;
        
    // }
//     console.log(xhr.readyState);
//   }
// ------------------------------------
    xhr.onload=function(){
        if (this.status==200) {
            console.log(this.responseText);
            
        }
        else{
            console.error("some error");
        }
    }
    
   
    
    xhr.send();
})