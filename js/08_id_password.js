var i=2;
function valid()
{
var id=document.getElementById("id").value;	
var password=document.getElementById("password").value;
if(i==0)
	document.write("Error: You Reached maximum Attempts");
else if(id==password)
	{
	document.write("Login Successful");
	}
else
	{
	 if (confirm(" Wrong Ceredentials Chances left : "+i) == true) {
	    i--;    
	    } else {
	        i--;
	    }
	}
}