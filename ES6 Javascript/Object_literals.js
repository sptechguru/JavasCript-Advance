console.log("The object literal is one of the most popular patterns for creating objects in JavaScript because of its simplicity. ES6 makes the object literal more succinct and powerful by extending the syntax in some ways. {}");

let num = 'Employee';

let obj = {
    [num + "name"]:"Santosh Pal",
    course:"B.tech",
    branch:"Computer Science",
    method:function(){
        return `${this.Employeename} And Course is ${this.course}`
    },

    // 2nd Examples of Es6
    'sum'(a,b){
      return a+b;
    } 

};

console.log(obj);
console.log(obj.method());


// 2nd Examples  function name is inside square brackets for sum []
console.log(obj['sum'](1,5));


// 3rd  Examples function retur is object

let fname = "Santosh";
let lname = "Pal";
let course = "B.Tech";

const ObjFunction = (fname,lname,course,age=18) =>{
    let fullname = fname + " " + lname; +" "+ age;
    return {
        fullname,
        course,
        age
    };
}

let obj_result = ObjFunction("Rajesh",lname,course,25);
console.log(obj_result.fullname);

console.log(ObjFunction("Rajesh",lname,course,25));


var a,b = 10
console.log(typeof(b));
console.log(b);








