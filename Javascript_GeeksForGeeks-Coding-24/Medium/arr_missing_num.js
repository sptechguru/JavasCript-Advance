function missingNumber(arr) {
  const numberObj = {};
  for (const num of arr) {
    numberObj[num] = true;
  }
  for (let i = 1; i <= 100; i++) {
    if (!numberObj[i]) {
      return i;
    }
  }
}

const integer = [1, 2, 3, 4, 5, 8 /* ... */, 99, 100];
const result = missingNumber(integer);
console.log("Missing number:", result);

let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
function removeFalsey(arr) {
  // newly created array
  let newArr = [];
  // Iterate the array using the forEach loop
  arr.forEach((k) => {
    // check for the truthy value
    if (k) {
      newArr.push(k);
    }
  });
  // return the new array
  return newArr;

  return arr.filter((k) => {
    // Checking if the value is truthy
    if (k) {
      return k;
    }
  });
}
console.log(removeFalsey(arr));

let arr2 = [89, 89, 11, 2, 3, 4, 2, 4, 5, 7];
let sort_arr = arr2.slice().sort();
let res = [];

function gfg_Run() {
  for (let i = 0; i < sort_arr.length - 1; i++) {
    if (sort_arr[i + 1] == sort_arr[i]) {
      res.push(sort_arr[i]);
    }
  }
  console.log("Non Unique values are: " + res);
}

gfg_Run();
