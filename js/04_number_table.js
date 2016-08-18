function table()
{

var num=document.getElementById("table").value;
calTable(num);


}
function calTable(numb)
{
	
	for(var i=1;i<11;i++)
	{
	document.write("<br>"+numb+" * "+i+ "="+(numb*i));
	}	
	if (confirm("Print table of nextNumber!") == true) {
	    numb++;
	    document.close();
	    
	    calTable(numb);
	}
}