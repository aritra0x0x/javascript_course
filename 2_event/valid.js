// to check validity
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("email").addEventListener("input",function(event){
        const emailElement= event.target;
        
        if(emailElement.validity.typeMismatch){
            emailElement.setCustomValidity("please enter valid");
            emailElement.reportValidity();
        }
        else{
            emailElement.setCustomValidity("");
        }
        
    })
})

