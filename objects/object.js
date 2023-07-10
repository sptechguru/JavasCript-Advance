let course = {
 title:" javascript" ,
 content:"i am front end developer",
 enroll(){
    console.log("Student this course is Enrolled")
 }
}

// object add another key for using objects.assigne

let obj_assigne = Object.assign({},course)
obj_assigne.title = "Python Languages"
console.log("objAss", obj_assigne);

//  object iterate for in Loop
for(let item in course){
    console.log('object....',course[item]);
}

//  objects iterate keys method
let course_1 = {}
for(let item of Object.keys(course)){
    console.log('object Keys....',item);
    course_1[item] =  course[item];
}
console.log('KEYS',course_1);


//  objects iterate keys method
let course_2 = {}
for(let item of Object.values(course)){
    course_2[item] = course[item]
    console.log('object values....',item);
}
console.log("VALUES",course_2)


let res = course
console.log(res['content']);
console.log(res.title);

// res.enroll();

// Factory Function for using objects
const  enRollMethod =()=>{
    return {
        title:" javascript" ,
        content:"i am front end developer",
        enroll(){
           console.log("Student this course is Enrolled")
        }
       } 
}

let fact =  enRollMethod();
// fact.enroll();
console.log(fact);

// for Using constructor fuction
function EnrollCourse  (title,content) {
  this.title = title,
  this.content = content,
  this.enroll = function(){
    console.log("Fat Arrow Fuction");
  }
}
let const_fu =  new EnrollCourse('Angular', "I am Angular Developer");
// const_fu.enroll();
// console.log(const_fu);