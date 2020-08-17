let audio;
let sounds = ['sounds/soundButn1.mp3', 'sounds/soundButn2.mp3', 'sounds/soundButn3.mp3', 'sounds/soundButn4.mp3', 'sounds/soundButn5.mp3'];
let buttons = document.querySelectorAll('button');

function playSound(arr){
	audio = new Audio();
	audio.src = arr;
	audio.autoplay = false;
	audio.play();
	return audio;
} 


	
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			playSound(sounds[i]);
		});
	}

	function checkMove(item){

		switch (item.keyCode){

        case 65:  
			playSound(sounds[0]);
			break;
		case 83:  
			playSound(sounds[1]);
			break;
		case 68:  
			playSound(sounds[2]);
			break;
		case 70:  
			playSound(sounds[3]);
			break;
		case 71:  
			playSound(sounds[4]);
			break;


		}

	


	}
document.addEventListener("keyup", checkMove);