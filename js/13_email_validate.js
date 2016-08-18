function validateEmail()
{
var email=document.getElementById("email").value;	
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
       document.write("Invalid email Address");}
       else
    	   document.write("Valid Mail Id");
    }
