const res = document.getElementById(`result`);
let fontSize = 16;
let bool;


function* generatot()
{
	let i = 0;
  while (true) {
    yield i++;
  }
}

const Generator = generatot();


document.getElementById(`generator`).addEventListener("click",()=> {
res.innerHTML = Generator.next().value;
});


function* upSize () {

while(bool ===true)
	yield(fontSize+=2);
}

function* downSize () {

while( bool ===false )
	yield( fontSize-=2 );
}


let sizeUp = upSize();
let sizeDown = downSize();

document.getElementById(`up`).addEventListener("click",()=> {
	bool = true;
res.style.fontSize = `${sizeUp.next().value}px`;
});


document.getElementById(`down`).addEventListener("click",()=> {
	bool = false;
res.style.fontSize = `${sizeDown.next().value}px`;
});

