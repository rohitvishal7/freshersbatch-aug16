function calChar()
{
var sentence=document.getElementById("sentence").value;
var p=1;
var j=0;
while(p==1)
	{
var e=sentence.indexOf(" ");
if(e>=0)
	{
	sentence= [sentence.slice(0, e), "b", sentence.slice(e+1)].join('');
	j++;
		}
else
	p=0;
	}
var h=sentence.length-j;
document.write("Number of character is"+h);
}