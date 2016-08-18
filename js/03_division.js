function divide()
{
var num1=document.getElementById("num1").value;
var num2=document.getElementById("num2").value;
if(num2==0)
	{
	alert("Number Should Not Be Zero");
	}
else
	{
	var div=num1/num2;
	document.write("Division of numbers is : "+div);
	}
}