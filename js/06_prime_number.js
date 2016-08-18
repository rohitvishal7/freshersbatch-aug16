function prime()
{
var num1=document.getElementById("numb1").value;
var num2=document.getElementById("numb2").value;

for(var i=num1;i<=num2;i++)
	{
	var t=0;
	for(var j=2;j<i;j++)
		{
		if(i%j==0)
			t=1;
				}
	if(t==0)
		{
				document.write("<br>"+i);
		}
	}
}