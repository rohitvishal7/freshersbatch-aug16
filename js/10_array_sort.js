var arr=[10,3,4,6,1,2,90];
function ascend()
{
for (var i in arr)
	{
	var h=parseInt(i)+1;
	for(var j=h;j<arr.length;j++)
		{
		if(arr[i]>arr[j])
			{
			var p=arr[i];
			arr[i]=arr[j];
			arr[j]=p;
			}
		}
	}
for(var i in arr)
	document.write("<br>"+arr[i]);
}

function descend()
{
for (var i in arr)
	{
	var h=parseInt(i)+1;
	for(var j=h;j<arr.length;j++)
		{
		if(arr[i]<arr[j])
			{
			var p=arr[i];
			arr[i]=arr[j];
			arr[j]=p;
			}
		}
	}
for(var i in arr)
	document.write("<br>"+arr[i]);
}