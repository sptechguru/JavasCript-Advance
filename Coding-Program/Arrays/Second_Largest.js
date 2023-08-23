// Write a program given array is second largets array elements 
// Input   [1,2,34,2,3,36]  // Opis 36
// output  [10,15,12]  // Op is 15

let arr1  = [10,15,12];
let arr2  = [1,2,34,2,3,36];

const seCondLargestArray =(arr)=>{
    const uniqueArr = Array.from(new Set(arr));
      uniqueArr.sort((a,b)=>{
        return b-a;
      })
      if(uniqueArr.length >= 2 ){
        return uniqueArr[1];
      }
      else{
        return -1;
      }
}
// console.log(seCondLargestArray(arr2));

const secondLargetOptimizes = (arr)=> {
    let largest =  -1;
    let secondLarget = 1;
    for(let i =0; i<arr.length; i++){
        if(arr[i] > largest){
         secondLarget = largest;
         largest = arr[i];
        }
        else if(arr[i] !== largest && arr[i] > secondLarget){
           secondLarget = arr[i]
        }
    }
    return secondLarget;
}

console.log(secondLargetOptimizes(arr2));