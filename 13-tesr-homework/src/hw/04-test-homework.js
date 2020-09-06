


function getRandomArray (min,max,length)
{  
	let  arr=[];
	
	for(let i = 0; i < length; i++)

        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);


	
	return arr;
}
let result = getRandomArray(1,20,10);

export default result;




