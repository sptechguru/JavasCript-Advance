
let arrData = [1,4,0,5,0,4,2,0,8]
// place all the 0 in the last of array without using new array and without sort 



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









