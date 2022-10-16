
document.getElementById("fetchBtn").addEventListener("click",function(element){
    element.preventDefault();
       
 

  
  

   
    // xhr.addEventListener('load',function(){
    //     if(xhr.status == 201 && xhr.readyState == 4){
    //         const res = JSON.parse(xhr.responseText);
    //      console.log(res);
    //     }
    //     else{
    //         throw new Error("bad request");
    //     }
    // })

    const xhr = new XMLHttpRequest();
        
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200)
        {console.log(xhr.responseText);
        
    }
}

    
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);  
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //common mime type
    // xhr.setRequestHeader("Content-type", "application/json"); //common mime type
    
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    xhr.setRequestHeader("Content-type", "application/json");


    const newUser ='{"name":"harglry784vng","salary":"123","age":"23"}';
        xhr.send(JSON.parse(newUser));
      
        
    })