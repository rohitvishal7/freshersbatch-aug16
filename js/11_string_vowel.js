function calVowel()
{
var str="The quick brown fox jumps over the lazy dog"	
	var a=0;
var e=0;
var i=0;
var o=0;
var u=0;
	for(var j=0;j<str.length;j++)
		{
		var chr=str.charAt(j);
		if(chr=='A' || chr=='a')
			a++;
		else if(chr=='E' || chr=='e')
			e++;
		else if(chr=='I' || chr=='i')
			i++;
		else if(chr=='O' || chr=='o')
			o++;
		else if(chr=='U' || chr=='u')
			u++;
		}
document.write("a = "+a+" e = "+e+" i = "+i+" o = "+o+" u = "+u);
}