function passwordCheck(){
    var Username=document.getElementById("uname").value;
var password=document.getElementById("password").value;
var confirmPassword=document.getElementById("conpass").value;
if(!uname||!password||!conpass){
    document.write("Fields cannot be empty");
    return false;
   
}else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
alert("Password must contain special characters and a number");
}else if(password!=confirmPassword){
    alert("Incorrect password!");
    return false;
}else if(password==confirmPassword){
    alert("Successfully Created");
    document.write("Name: "+Username);
    document.write("<br><br>Password: "+password);
    
}
}