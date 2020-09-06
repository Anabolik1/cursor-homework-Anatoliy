const BASE = 'https://swapi.dev/api/';
const FILMSECOND = `https://swapi.dev/api/films/2/`;



const btn1 = document.getElementById(`btn1`);
const btnNext = document.getElementById(`next`);
const btnPrev = document.getElementById(`prev`);


function getPlanets (page) {
	const config ={

		params:{
			page: page
		}
	};
	return axios.get(BASE + 'planets',config)
	.then((res)=>{
	return 'res: ',res.data.results;
})
	.catch(()=>{
	console.log("something wrong");
});

}


//console.log(getPlanets());

function renderPlanets(planets) {
	const container = document.querySelector('.planets');
	container.innerHTML=``;

	planets.forEach((elem) => {
		const planetElement = document.createElement('div');
		planetElement.className = `personage`;
		planetElement.innerHTML =`
		<h3> ${elem.name}</h3>
		`;
		 
		

	container.append(planetElement);
		})
}

function showplanets() {
	let currentPage = 1;

document.getElementById(`next`).addEventListener(`click`,()=>{
if ( currentPage ===6 ) return;
	getPlanets(++currentPage).then(renderPlanets);
});

	document.getElementById(`prev`).addEventListener(`click`,()=>{
if( currentPage === 1 ) return;
	getPlanets(--currentPage).then(renderPlanets);
});
}

btn1.addEventListener(`click`,()=> {
	
getPlanets()
.then(renderPlanets)

});

	
showplanets();

function renderHero(character) {
	const containerr = document.querySelector('.hero');
	
    const heroElement = document.createElement('div');
		heroElement.className = `personage`;
		heroElement.innerHTML =`
		<h3> ${character.name}</h3>
		<h3> ${character.birthday+ ""}</h3>
		<h3> ${character.gender}</h3>
		`;
	

	containerr.append(heroElement);
}
		

const getHerou = async (urll)=> {

	const res = await fetch(urll);
	const data = await res.json();
	const character = {
		name : data.name,
		birthday : data.birth_year,
		gender : data.gender,
	};
	renderHero(character);

}

const getHerous = async () => {

	try {
		const res = await fetch(FILMSECOND);
		const data = await res.json();
		data.characters.forEach(url =>{
			getHerou(url).then((charLinks) => {
            const newLinks = [];
            for (let i = 0; i < charLinks.length; i++) {
                newLinks[i] = charLinks[i].replace("http://", "https://");
            }
            return Promise.all(
                newLinks.map((el) => {
                    return axios.get(el).then((res) => res.data);
                })
            );
        })
		});
	}
	catch (e) {
    throw new Error(`Error: ${e.message}`);
  }
};





btn2.addEventListener(`click`,getHerous);
 
 