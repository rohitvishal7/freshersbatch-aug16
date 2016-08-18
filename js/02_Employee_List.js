var i=0;
var Emp=[101,20000,"Rohit",1];
var Emp1=[102,0000,"Mohit",3];
var Emp2=[103,50000,"Sohit",4];
var Emp3=[104,30000,"Pohit",1];
function EmployeeList()
{
this.Employee=[{empId:101,empSal:20000,empName:"Rohit",deptNo:1},{empId:102,empSal:200000,empName:"Kohli",deptNo:1},{empId:103,empSal:50000,empName:"Sohit",deptNo:1},{empId:104,empSal:30000,empName:"Mohit",deptNo:4}];

this.change=function sort()
{
for(i in this.Employee)
	{
	for(var j=1+i;j<this.Employee.length;j++)
		{
		if(this.Employee[i].empId>this.Employee[j].empId)
			{
			var p=this.Employee[i];
			this.Employee[i]=this.Employee[j];
			this.Employee[j]=p;
						}
		
		
		}
	}
for(i in Emp)
	{
	document.write("<br>"+this.Employee[i].empId+"<pre> </pre>"+this.Employee[i].empSal+"<pre> </pre>"+this.Employee[i].empName+"<pre> </pre>"+this.Employee[i].deptNo+"<pre> </pre>");
	
	}
}
}

function sort()
{
	var em=new EmployeeList();
	em.change();
}
