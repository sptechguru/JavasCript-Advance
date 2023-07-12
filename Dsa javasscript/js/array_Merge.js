console.log("Array Delete Element value  Method........");

let arr1 = ["Santosh", "Rohan", "Raj", "Ashish", "Ajay", "Babulu"];
let arr2 = [3, 4, 5, 6, 89, 90, 100, 200, 500];
let mergeArray = [];

for (let i = 0; i < arr1.length; i++) {
    mergeArray[i] = arr1[i];
}

for (let j = 0; j < arr2.length; j++) {
    // console.log( arr1.length+j);
    mergeArray[arr1.length + j] = arr2[j];
}

console.log(mergeArray)



// Level 2 is Default Method is spread opertor in ...
let mergeSpred = [...arr1, ...arr2];
console.warn(mergeSpred)

