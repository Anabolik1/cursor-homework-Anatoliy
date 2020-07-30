const array = [6,4,5,11,3.5,-4,10,15,6,5,5];



function getRandomArray (min,max,length)
{  
	let  arr=[];
	
	for(let i = 0; i < length; i++)

        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);


	
	return arr;
}
alert ("Random array = "+getRandomArray(1,20,20));



function average(nums) {
	const arr2=[];
	for (let i = 0; i < nums.length; i++) {
		if(nums[i]%1===0)
			arr2.push(nums[i]);

	}
	
    return arr2.reduce((a, b) => (a + b)) / arr2.length;
}
alert ("Average of numbers ="+average(array));

const getModa = (...numbers) =>{
    return numbers.filter(el => el%1 === 0)
        .sort((a,b) =>
            numbers.filter(el => el === a).length - numbers.filter(el => el === b).length)
        .pop()
}
alert("Moda ="+getModa(...array));




const parninumbers = array.filter(notpare=>
{
	if(notpare%2 !==0)
	{
return true;}
})
alert("Ne parni chisla"+parninumbers);


const biggest0 = array.filter(numbers=>
{
	if(numbers>0)
	{
return true;}
})
alert("Biggest then 0 ="+biggest0);


const del5 = array.filter(numbers=>
{
	if(numbers%5===0)
	{
return true;}
})
alert("dilennya na 5 -"+del5);






