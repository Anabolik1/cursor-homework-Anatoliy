const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students){
    let pairsStudents = []; 
    let boysStudents = [];
    let girlsStudents = [];
    for(student of students)
    {
        if(student === "Олександр" || student === "Ігор" || student === "Олексій"){
            boysStudents.push(student);
        }

        else
        {
            girlsStudents.push(student);
        }
    }

    for(let i = 0; i < 3; i++)
    {
        pairsStudents[i] = [`${boysStudents[i]} i ${girlsStudents[i]}`];
    }
    return pairsStudents;
}

let pairs = getPairs(students);
console.log(pairs);
document.writeln(`<p>пари студентів: ${pairs}</p>`);

function pairsThemes (pair,them)
{
	let themesStudent =[];
	for (let i=0;i<themes.length;i++)
	{
		themesStudent[i]= [`${pairs[i]} - ${themes[i]}`];
	}
	return themesStudent;

}
let pairThemes = pairsThemes(pairs,themes);
console.log(pairThemes);
document.writeln(`<p>пари студентів з предметами: ${pairThemes}</p>`);

function markForStudents (student,mark)
{
	let markForStudent =[];
	for (let i=0;i<marks.length;i++)
	{
		markForStudent[i]= [`${students[i]} - ${marks[i]}`];
	}
	return markForStudent;

}
let markStudents = markForStudents(students,marks);
console.log(markStudents);
document.writeln(`<p>індивідуальні оцінки: ${markStudents}</p>`);

function getRandomMark(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomMarks (pair,mark)
{
	let randomMarkForPairs = [];

	 for (let i=0;i<pairs.length;i++)
	 {
	 	randomMarkForPairs[i]=[`${pair[i]} - ${themes[i]} - ${getRandomMark(1,5)}`];
	 }
	 return randomMarkForPairs;
}
let randMark = randomMarks(pairs,marks);
console.log(randMark);
document.writeln(`<p>оцінки пар : ${randomMarks(pairs,marks)}</p>`);


