function pow(a, n) {
//let b = document.getElementById("textBox2").value;
 //let n = document.getElementById("textBox3").value;


     b = a;

 
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
function vivod1 ()
{
	let r =pow(document.getElementById("textBox2").value,document.getElementById("textBox3").value);
	alert(r);
}

 //alert(pow(2, 5));

function getMaxDigit(number)
{   number = document.getElementById("textBox1").value;
	let max=0;
	let arr= String(number);
	arr=arr.split('');
	for(let i=0;i<arr.length;i++)
	{
		if(max<arr[i])
			max=arr[i];
	}
	return  max;
}
function vivod ()
{
	let t =getMaxDigit(document.getElementById("textBox1").value);
	alert(t);
}



//alert(getMaxDigit(839));

function firstLetter(name) {
	name=document.getElementById("textBox4").value;
   
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    
}
function vivod2 ()
{
	let y =firstLetter(document.getElementById("textBox4").value);
	alert(y);
}

//alert(firstLetter("leoNDEsh"));

function sumWithoutTax (sallary)

{ 
	sallary=document.getElementById("textBox5").value;
	const tax = 19.5;

	let sum = sallary - ((sallary/100)*19.5);

	return sum;
}
function vivod3 ()
{
	let u =sumWithoutTax(document.getElementById("textBox5").value);
	alert(u);
}
//alert(sumWithoutTax(1000));


function randomInteger(min, max) {
 min=document.getElementById("textBox6").value;
 max=document.getElementById("textBox7").value;
 let rand =0;
 if(min >= max)
 {
 	alert("Error");
 }
 else
 {

   rand = min - 0.5 + Math.random() * (max - min + 1);

	}

  return Math.round(rand);
}
function vivod4 ()
{
	let v =randomInteger(document.getElementById("textBox6").value,document.getElementById("textBox7").value);
	alert(v);
}
//alert( randomInteger(1, 10) );

function countLetters(letter , word)
{ letter=document.getElementById("textBox8").value;
word=document.getElementById("textBox9").value;
	let counter =0;
	let str1=	letter.toLowerCase();
	let str = word.toLowerCase();
	for(let i=0;i<str.length;i++)
	{
		if(str1 === str[i])

			counter++;

	}
	return counter;
}
function vivod5 ()
{
	let d =countLetters(document.getElementById("textBox8").value,document.getElementById("textBox9").value);
	alert(d);
}
//alert(countLetters("A","Ababagalamagaaaa"));

function converting(value) {
    if(String(value).split('').reverse()[0] === '$') {
        value = (parseInt(value) * 25) + "UAH";
        return value;
    } else if (String(value).split('').reverse()[0] === 'h' || String(value).split('').reverse()[0] === 'H') {
        value = (parseInt(value) / 25) + "$";
        return value;
    } else {
        return 'Неправильні дані!';
    }

        }
        function vivod6 ()
{
	let a =converting(document.getElementById("textBox10").value);
	alert(a);
}
//alert(converting(200,'uah'));


function randomPassword ( )

{
	   
		let password="";
	let answer = confirm("Are you agreed with password length 8 symbols ?");
	if (answer)
	{
		for (let i=0;i<8;i++)
		{
			password+=String(getRandomArbitrary(0,10));
		}
	}
		else
		{
			let answer2=prompt("What password length do you want?");
			for(let i=0;i<answer2;i++)
				password+=String(getRandomArbitrary(0,10));
		}
		
		
	
	return password;

}
//alert(randomPassword());

function deleteLetter(letter, word) {
	letter = document.getElementById("textBox12").value;
	word=document.getElementById("textBox13").value;
	
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
        word = word.replace(letter, '');
    }
    return word;
}
function vivod7 ()
{
	let z =deleteLetter(document.getElementById("textBox12").value,document.getElementById("textBox13").value);
	alert(z);
}



function unique_letters(str) {
	str =document.getElementById("textBox14").value
  var str = str.split('');
  var res = str.filter(function(val, i, str) {
  return str.lastIndexOf(val) === str.indexOf(val);
      
  });
  return res;
}
function vivod8 ()
{
	let k =unique_letters(document.getElementById("textBox14").value);
	alert(k);
}
