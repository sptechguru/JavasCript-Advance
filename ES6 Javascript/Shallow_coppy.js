console.log('Shallow coppy & Deep Coppy');
let def  = `
Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
`;

let obj = {
    name:"santosh",
    last:"pal",
    age:23
}

console.log('Original Data',obj);


let shCopy = obj;
// let shCopy2 = Object.assign({}, obj) 
 // object is copy of refrence variables {...obj} not changes origranl data in sprread opertor

shCopy.name = "Ravi"
console.log('Shallow',shCopy);
console.log('Original 2 Data',obj);


// Deep copy
let depDef = `Deep copy: means that all levels of the object are copied. This is a true copy of the object.`;
// A deep copy can be achieved using JSON.parse() + JSON.stringify():

let deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.name = "kartik"
deepCopy.age = 11

console.log('oriignal data in deep ......', obj)

console.log('deepCopy ......', deepCopy)
