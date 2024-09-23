let arr  = [1,5,6,9,14,58,100,14,50]

let arr2  = [1,5,6,9,14,58,100,14,50]

let data =arr.reverse();
console.log(arr)

// let reverse_array = arr.map((item, idx) => array[array.length - 1 - idx])
// console.log(reverse_array);

//  for Custome Loop 
let reveArr = []
let string = '';
for(let i= arr2.length-1; i>=0; i--){
  reveArr.push(arr2[i]); // 
  string += arr2[i];
}

console.log(string);
console.log(reveArr)

//  sorrted array 
let ascArr = reveArr.sort((a,b) => a-b );
console.log(ascArr)


let dscArr = reveArr.sort((a,b) => b-a);
console.log(dscArr)

// array convert in string 

let str = arr2.join(); // join() & toString()
console.log(str)


const n = 3;
const result = arr.slice(0, n);
console.log(result); // Output: [1, 2, 3]