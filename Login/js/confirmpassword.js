function validation(){
    var form=document.getElementById("form");
    var pass1=document.getElementById("password").value;
    var pass2=document.getElementById("password2").value;
    var text=document.getElementById("text");

    if(pass1!=pass2){
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML="failed....!";
        text.style.color="#FF0000";
        pass1.innerHTML="";
    }else{
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="succes....!";
        text.style.color="#00FF00";
    }
    if(pass1==""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML="";
    }
}

 document.getElementById("password").addEventListener('mouseover',function(){
        document.getElementById("text").innerHTML="";
    });
    
    
