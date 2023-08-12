
let arrData = [1,4,0,5,0,4,2,0,8]
// place all the 0 in the last of array without using new array and without sort 

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    // Step 1: Move all non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
    }
    // Step 2: Fill the remaining elements with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }
 
  // Example usage:
let res =  moveZerosToEnd(arrData);
console.log(res);   // Output: [1, 4, 5, 4, 2, 8, 0,0,0]


function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    console.log('expected Sum', expectedSum);
    let actualSum = 0;
    // Calculate the actual sum of elements in the array
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
    }
    return expectedSum - actualSum;
  }
  // Example usage:
  console.log("Missing number:", findMissingNumber(arrData)); // Output: Missing number: 5
  
  

let arrvalue = [];
for(let i= arrData.length-1; i>1; i--){
    // console.log(arr[i]);
}
