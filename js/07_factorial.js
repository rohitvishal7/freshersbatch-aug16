function factorial()
{
var num=document.getElementById("number").value;
var pro=1;
for(var i=num;i>1;i--)
	{
	pro*=i;
	}
document.write("Factorial is"+pro);
}