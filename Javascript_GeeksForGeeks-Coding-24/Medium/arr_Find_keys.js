let objArray = [
  { course: "DevOps", price: 11999 },
  { course: "GATE", price: 6999 },
  { course: "ML & DS", price: 5999 },
  { course: "DSA", price: 3999 },
];

const findIndexByKeyValue = (arr, key, value) => {
  return arr.reduce((index, obj, i) => (obj[key] === value ? i : index), -1);
};
let index = findIndexByKeyValue(objArray, "course", "DSA");
console.log(index);

let k = "course";
let val = "GATE";
let objIndex = -1;

for (let i = 0; i < objArray.length; i++) {
  // console.log(objArray[i][k]); // objArray[i].course
  if (objArray[i][k] === val) {
    objIndex = i;
    break;
  } else {
    console.log("data is Not found");
  }
}
console.log(objIndex);

let objIndexs = objArray.findIndex((item) => item[k] === val);
let objIndexMap = objArray.map((temp) => temp[k]).indexOf(val);

console.log(objIndexs, objIndexMap);

let numbers = [1, 2, 3, 4, 5, 6];
// Change all even numbers to their double
numbers.forEach((element, index, array) => {
  if (element % 2 === 0) {
    array[index] = element * 2;
  }
});
console.log(numbers);

function updateArrayElements(arr, conditionFn, newValue) {
  // Iterate through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element meets the condition
    if (conditionFn(arr[i])) {
      // Update the element if condition is true
      arr[i] = newValue;
    }
  }
}

function isGreaterThanFive(num) {
  return num > 5;
}

updateArrayElements(numbers, isGreaterThanFive, 10);
console.log(numbers);
