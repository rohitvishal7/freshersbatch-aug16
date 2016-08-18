function calculate()
{
var arr=[10,4,3,5,6];
var sum=0;
var p=0;
var max=-1;
var min=1000000000000000;
for (var i in arr)
	{
	sum+=arr[i];
	if(arr[i]>max)
		max=arr[i];
	if(arr[i]<min)
		min=arr[i];
	p++;
	}
var avg=sum/p;
document.write("Average is"+avg);
document.write("<br> Sum is"+sum);
document.write("<br> Maximum is"+max);
document.write("<br> Minimum is"+min);
}