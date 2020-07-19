let number1 =Math.floor(+prompt("Please enter first number "));

let number2 =Math.floor(+prompt("Please enter second number "));

let sum =0;

while(isNaN(number1) || number1 == "")

    number1 =  +prompt("Please enter a correct number!");
  


while(number1 >= number2 ||  isNaN(number2) || number2 =="")

    number2 = +prompt("Second number must be higher then first! Please enter a correct number");
	

let skipEvenNumbers = confirm ("Skip even numbers ?");
 
while (number1 <= number2 )

{

if(skipEvenNumbers)

{
    if(number1 % 2 ===0)

    {
        number1 ++;
        continue; 
    }
 }
sum += number1;

number1 ++;

}
alert("Sum = "+sum);

