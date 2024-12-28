// use case of getters setters
// all getters or setter being used for private fields 
class course{
    private _courseCount = 1;


    get getCourseCount(){
     return this._courseCount;
    }

    set setCourseCount(n:number){  //setter have no return type 
      this._courseCount = n
    }

}

var course1 = new course();

console.log(course1.getCourseCount);

course1.setCourseCount = 4;

console.log(course1.getCourseCount);

