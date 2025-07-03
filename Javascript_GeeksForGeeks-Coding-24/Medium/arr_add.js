let obj = { name: "John", age: 30 };
let arr = ["Alice", "Bob"];
arr.push(obj);
console.log(arr);


let list = ["Geeks", "Contribute", "Explore"];
list.unshift(obj);
console.log(list);


const newArray = list.concat(obj);
console.log(newArray);

let arrObj = [...arr, obj]
console.log(arrObj);


//  insert Elements
const insertElement = () => {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;
    arr.splice(index, 0, element);
    console.log(arr);
}
insertElement();


let Arr = [50, 60, 20, 10, 40];
let minValue = Infinity;
let maxValue = -Infinity;

for (let item of Arr) {
    // Find minimum value
    if (item < minValue)
        minValue = item;

    // Find maximum value
    if (item > maxValue)
        maxValue = item;
    console.log("Minimum element is:" + minValue);
    console.log("Max element is:" + maxValue);
}


// let Arr = [50, 60, 20, 10, 40];
// Sort array in ascending order
Arr.sort((a, b) => a - b);
let minValues = Arr[0]; // First element after sorting is the minimum
 // Sort array in descending order
 Arr.sort((a, b) => b - a);
let maxValues = Arr[0]; // First element after sorting is the maximum
console.log("Minimum element is:" + minValues);
console.log("Maximum Element is:" + maxValues);
