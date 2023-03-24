var a=[3,657,57,56,644,6464,464,464646,646];
var b=a[0];
var c=a[0];
for(i=0;i<a.length;i++)
    {
	   if(a[i]<b)
	   {
		   b=a[i];
	   }
	   if(a[i]>c)
	   {
		     c=a[i];
	   }
	}
	console.log(b+ "<br>"+c);