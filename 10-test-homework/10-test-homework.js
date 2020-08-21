

const btn = document.getElementById("btn1");

function getRandomChinese(length)
{
	return new Promise((resolve)=>{

	setTimeout(()=>{

		let i = 0;
		let arr = [];
		let sign = String(Date.now()).slice(-5);

			while( i < length ){
				sign+=1;
				arr.push(String.fromCharCode(sign));
				i++;
				 
        }

	resolve( arr.join(""))},length*50);

    });

}


 btn.addEventListener("click", ()=>{

 	getRandomChinese(5).then((result) => {
 		
 		document.getElementById("result").innerHTML = result;

 	})
 })
	