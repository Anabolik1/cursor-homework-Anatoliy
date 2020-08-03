const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];



function getSubjects(name)

{
    const subjects = Object.keys(name.subjects);
    const les = subjects.map(les => (les[0].toUpperCase() + les.slice(1).toLowerCase()).replace('_', ' '));
    return les;
}

console.log(getSubjects(students[0]));



function getAverageMark(avarage)

{
    const subjects = Object.values(avarage.subjects).join(',').split(',');
    const sum = subjects.reduce((acc, curentvalue) => parseInt(acc) + parseInt(curentvalue), 0);
    const avarageMark = sum/subjects.length;

    return avarageMark.toFixed(2);
}

console.log(getAverageMark(students[0]));

function getStudentInfo(student)

{
  const infoStudent = [];
  const course=student.course;
  const name=student.name;
  const avarageMarkStudent=getAverageMark(student);

  infoStudent.push("course - " +course+' '+"name - "+name +' '+"mark - "+avarageMarkStudent);
  return infoStudent;

}
console.log(getStudentInfo(students[2]));



function getStudentsNames(student)

{
    const coorectOrder = student.map(item => item.name).sort();

    return coorectOrder;
}

console.log(getStudentsNames(students));


function getBestStudent(students) {
        let bestStudent;
            if(getAverageMark(students[0]) > getAverageMark(students[1]) && getAverageMark(students[0]) > getAverageMark(students[2])){
               bestStudent=students[0].name;
            }else if(getAverageMark(students[1]) > getAverageMark(students[0]) && getAverageMark(students[1]) > getAverageMark(students[2])){
               bestStudent=students[1].name;
            }else{
                bestStudent=students[2].name; 
            }
        return bestStudent;
}
console.log(getBestStudent(students));



function calculateWordLetters(str){
    let word = {};
    let i = str.toLowerCase().split('').forEach(letter =>
    {
        if(word[letter]){
            word[letter]++;
        } 
        else
        {
            word[letter] = 1;
        }
    });
    return word;
}
console.log(calculateWordLetters('ababagalamaga'));