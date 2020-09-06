const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];


function getPairs(students)
{
    let pairsStudents = []; 
    let boysStudents = [];
    let girlsStudents = [];
    for(let student of students)
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

export default  getPairs(students);
