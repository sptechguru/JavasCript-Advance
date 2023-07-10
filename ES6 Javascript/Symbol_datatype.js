console.log("Symbol  is DataType Unique Values are used es6 new features ");

'use strict'
let id = Symbol("Santosh Pal");

console.log(id);
console.log(id.toString());
console.log('Cheked valuses'+ id.description);

// 2nd symbol Data type using in object for used square brackets isside obj []

let age = Symbol("Eldtle");

let obj_symbol = {
    name:'sani',
    //1st case use symbol is used 
     [age]:25
};

//2nd case use symbol is used var name 
// obj_symbol[age] = 30

console.log(obj_symbol);

// symbol data type print in using [] brackets not usin & symbol is not used for in loop & json stringfy is not support 
console.log(obj_symbol[age]);

for(let val in obj_symbol){
    console.log(val);
}


console.log(typeof(id));
let a = []; // {}
let b = []; // {}
console.log(a == b);   //false because refrence error is  store the memory