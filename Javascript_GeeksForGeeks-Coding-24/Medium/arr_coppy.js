const arr = [1, 4, , 5, 2, 16, 8];
const copy = [...arr]
const cslice = arr.slice();

const newArray = [].concat(arr);

const copiedArray = Array.from(arr);

const result = arr.map(item => item);


console.log(newArray);
console.log(arr)
console.log(copy)
console.log(cslice)
console.log(result, copiedArray)



