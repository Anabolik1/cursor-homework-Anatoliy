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

    set marks(mark)
    {
    	if(this.student)

    		
    		return this._marks.push(mark);
    	else

    	return console.log(null);
    }

    get marks ()

    {
    	if(this.student)

    	 console.log(this._marks);
    	else
    		console.log(null);
   
    }
     getAverageMark() {
        let averageMark;
        averageMark = this._marks.reduce((acc,mark) => acc+= mark);
        console.log(averageMark/this._marks.length)
        return averageMark/this._marks.length;
    }
    
    dismiss(){
        return this.student = false;
    }
    recover(){
        return this.student = true;
    }

    
}



const ostap = new Student("bogomolets","2","Ostap Bender");
console.log(ostap.getInfo());

ostap.marks;

ostap.marks =5;
ostap.marks =4;


ostap.marks =3;


ostap.marks;
ostap.getAverageMark();
ostap.dismiss();
ostap.marks;
ostap.recover();
ostap.marks;

class BudgetStudent extends Student
{
	constructor( university, course,fullName){
		super ( university, course,fullName);
		(setInterval(() =>this.scholarship, 3000));
	}

	 get scholarship()
	{
		if(this.student)
		{
			if(this.getAverageMark()<4){
				console.log("Ви не попали до списку стипендіатів");
				
			}
			else{
				console.log("Ви отримали стипендію у розмірі 1400 грн");
				
			}
		}
	}
}

const Anatoliy = new BudgetStudent("hpk","4","Anatoliy Kirienko");

console.log(Anatoliy.getInfo());

Anatoliy.marks=4;
Anatoliy.marks=4;
Anatoliy.marks=5;
Anatoliy.marks;



