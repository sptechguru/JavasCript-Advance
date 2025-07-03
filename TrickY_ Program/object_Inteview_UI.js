
console.log("Try programiz.pro");

let arr = [1,2,3,4,5];
console.log(arr[2], arr.length);  //op is 3, 5
arr.length = 0;
console.log(arr[2], arr.length) // op is undefined, 5


let arr2 = [['a','b','c'],[['a','b','c']]]; 
console.log(arr2.flat(Infinity)) // all array converted in single array 


let obj = {
    name:"Sani",
    address:'it park'
}
// Object.freeze(obj); Not add & not overide a objects values 
// Object.seal(obj);
obj.pincode = 452015;
obj.name = "Santosh Pal";
// delete obj.pincode;
console.log(obj)
console.log(obj.pincode) // getting undefined



function sum (){
    let a = 8;
    const b = 2;
    var c  = a+b;
    console.log(a,b,c)
}
   console.log(a,b,c) 
                 // Both of condtion getting Erorr a ,b c, is not defined outside because let & const is block of scope
sum();
 console.log(c);
