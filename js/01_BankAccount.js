function BankAccount(accNo,accBal,accName)
{
this.accNo=accNo;
this.accBal=accBal;
this.accName=accName;
this.withdraw = function withDrw(amt)
{
this.accBal=this.accBal-amt;
var acc=document.getElementById("accBal");
acc.innerHTML=parseInt(this.accBal);
}
this.deposit=function deposit(amt2)
{
this.accBal=this.accBal+amt2;	
var acc=document.getElementById("accBal");
acc.innerHTML=parseInt(this.accBal);
}
}
function withdraw(clicked_id)
{
var accNo=document.getElementById("accNo").value;	
var acc=document.getElementById("accBal");
var accBal=parseInt(acc.innerHTML);
var accName=document.getElementById("accName").value;
var amt=parseInt(document.getElementById("amt").value);
var bank=new BankAccount(accNo,accBal,accName);
if(clicked_id==1)
bank.withdraw(amt);
else
{
bank.deposit(amt);
}
}