

class Student

 {

    constructor( university, course,fullName){
       
        this.university = university;
        this.course = course;
         this.fullName = fullName;
         this._marks=[];
         this.student =true;

       // this.isStudent = true;
       
    }

    getInfo()
    {
    	return 'Student of '+this.course+"  course"+" in "+this.university+" university "+this.fullName;
    }
}

    const Anatoliy = new Student("hpk",4,"Anatoliy Kirirenko");

const res = Anatoliy.getInfo();

export default res;