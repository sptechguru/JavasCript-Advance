let arr = [0,0, 3,5,4,2,0,6];
let postion = 0;
let countZero = 0;

for(let i =0; i<arr.length; i++){
    if(arr[i] === 0 ){
        countZero++;
    }
    else{
        arr[postion] = arr[i]
        postion++;
    }
}

for(let j = arr.length-countZero; j<arr.length; j++){
    arr[j] = 0;
}

console.log(arr);


const moveZerosToEnd = (arr) => {
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
let res =  moveZerosToEnd(arr);
console.log(res);   // Output: [1, 4, 5, 4, 2, 8, 0,0,0]
