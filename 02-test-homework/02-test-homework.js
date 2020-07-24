function pow(a, n) {
let b = document.getElementById("textBox2").value;
 n = document.getElementById("textBox3").value;
     b = a;

 

    for (let i = 1; i < n; i++) {

        b *= a;

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
  let rand = min - 0.5 + Math.random() * (max - min + 1);
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

function converting (money , currency)
{ money=document.getElementById("textBox10").value;
currency=document.getElementById("textBox11").value;
let convertingmoney = String(money);
 
if(currency === '$')
	convertingmoney= money*27;
else

	if(currency === 'uah' || currency === 'UAH')
		convertingmoney=(money/27);


else

alert("Error");


return convertingmoney.toFixed(2);

}
function vivod6 ()
{
	let a =converting(document.getElementById("textBox10").value,document.getElementById("textBox11").value);
	alert(a);
}
//alert(converting(200,'uah'));

function getRandomArbitrary(min, max) {
  return (Math.floor(Math.random() * (max - min) + min));
}
//alert(Math.floor(getRandomArbitrary(0,10)));

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

//alert(deleteLetter('a','Ababagalamaga'));

/*function isPalyndrom(word) 
{
    word = String(word).toLowerCase().split('');
   let wordReverse=word.reverse();
    if (word === wordReverse ) 
        return true;
     else 
        return false; 

        //don't working... need to help!)
    

}
alert(isPalyndrom("Я несу гусеня "));
*/
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
//alert(unique_letters("anaconda"));
