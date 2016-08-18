function palindrome()
{
	var k=0;
var str=document.getElementById("word").value;	
var i=0;
var j=str.length-1;
while(i<j)
	{
	if(str.charAt(i)==str.charAt(j))
		{
		
		}
	else
		{k=1;
		document.write("Not A Palindrome");
		break;
		}
	i++;
	j--;
	}
if(k==0)
document.write("Palindrome");
}