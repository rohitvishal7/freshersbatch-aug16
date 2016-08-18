function isVowel()
{
var alpha=document.getElementById("alpha").value;
if(!(isNaN(alpha)))
alert("Please Enter A alphabet");
else 
{
	if(alpha=='A' ||alpha=='E'||alpha=='I' ||alpha=='O'||alpha=='U' ||alpha=='a'||alpha=='e' ||alpha=='i'||alpha=='o' ||alpha=='u')
		document.write("You entered a Vowel");
	else
		document.write("The alphabet you entered is not a vowel");
}
}