//readonly
class Points{
    readonly x : number ;
    constructor(x:number);
    constructor(x:string);
    // constructor(x:number){
    //     this.x = x;
    // }
    constructor(x:number|string){
        if(typeof x === "string"){
        this.x = Number(x);
        }
        else{
            this.x = x
        }
    }
}

var point = new Points(2);
var point1 = new Points("3");

