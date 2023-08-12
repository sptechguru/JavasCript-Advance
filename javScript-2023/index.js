let a = [];
let b = [];
//  this one false return becasue memmory is diffrence  for array a ,b, 
console.log(a == b);   // false
console.log(a === b);   //false

//  this one return in true both case because memory allocates  is  // return true
let c = []
let d =  c;
 console.log(c == d);
 console.log(c === d);

//  this one check array of value check because prefix values & item check

 let e = [30];
 let  f = [30];
 console.log(e[0]==f[0]);
 console.log(e[0]===f[0]);

 console.log("type of NAN is Data Type is Number:", typeof(NaN));


let add = 10 - -10
console.log(add) //  output is : 20 


// Set is javascript Data types it's remove Duplicate elements   
let sets = new Set([1,13,5,7,8,9,13,5,7,9]);
console.log(sets); 


let objData = {name:"santosh Pal"};
console.log(delete objData.name) // it's return is true
console.log(objData) // it's return is blank object {}
console.log(delete objData) // it's return is false

// array Destructuring Concepts
const arr = ['Santosh','Aishwary', "Anil"];
const [a1,a2] = arr;
// const [,a1,a2] = arr;  this one remove , first elements in santosh 
console.log(a1,a2)

// object destructuring  depends on key same key name used 
let objDest = {name:"Sani", dob:"16/04/1998", age:25};
let {name:fname,dob} = objDest;
console.log(fname +'....'+ dob)

// how to mergetwo objects

let obj1  = {Emp_name:"Santosh"};
let obj2  = {Email:"Rajesh@gmail.com"};
//obj1 = {obj1, ...obj2} not using array destructuring  this Op is : { obj1: { Emp_name: 'Santosh' }, Email: 'Rajesh@gmail.com' }
obj1 = {...obj1, ...obj2}
console.log(obj1); 


const names = "santosh";
//console.log(names());   // that is error show in names is not fuction.

// const result = false || {} || null;
const result = null || false || ' '; // OP is: blank ""
console.log(result); // Output is {}

console.log(Promise.resolve(79));  // Op is :Promise {<fulfilled>: 79}

let na = 'santosh';
 function getname(){
 console.log(na);
 let na = "sandeep";
 } 
 //getname();  // error show na is  before intialization 

function addSome(a,b,c){
    return a+b+c;
}
console.log(addSome(...[1,2,3]));

let perosn = {name:"Ajay"};
Object.seal(perosn); // can't modify person object 
// perosn = 'sunil';
console.log(perosn);



