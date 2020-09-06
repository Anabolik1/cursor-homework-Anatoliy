function pow(a, n) {
 let b = a;
if( n == 0  )
{
  b=1;
}
else 
if(n<0)
	{
		for ( let i = 1; i < -1*n; i++)
		{
		b*=a;

	}
	b=1/b;
	}
else
{
    for ( let i = 1; i < n; i++) {

        b *= a;

    }
}

 return b;
}



let result = pow(2,3);

 
export default result;