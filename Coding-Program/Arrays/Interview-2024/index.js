// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// // IP: [1,2,3,3,2,9,3]
// // OP: [1,2,3,9]

// console.log(a)
// Dilpreet Singh15:24
// HH:MM:SS
// Dilpreet Singh15:27
// IP: [1,2,3,3,2,9,3]
// OP: [1,2,3,9]
// Dilpreet Singh15:31
// IP: [11,42,53,14,85,16,77,48,79,2,10]
// 3rd smallest value

let arr  =  [1,2,3,3,2,9,3];
let res = new Set(arr);
let list = []


 function findThirdSmallest(arr) {
    // Check if the array has at least 3 elements
    if (arr.length < 3) {
        return "Array should have at least 3 elements";
    }
    // Remove duplicates and sort the array in ascending order
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    
    // Check if there are at least 3 unique elements
    if (sortedArr.length < 3) {
        return "Array should have at least 3 unique elements";
    }

    // Return the 3rd smallest element
    return sortedArr[2];
}

// Example usage:
const numbers = [11,42,53,14,85,16,77,48,79,2,10];
const thirdSmallest = findThirdSmallest(numbers);
console.log("The 3rd smallest number is:", thirdSmallest);





// import { DatePipe } from '@angular/common';
currentTime: any = '';

// constructor(private datePipe: DatePipe) {}

// ngOnInit() {
//   this.customeDate();
// }
// customeDate() {
//   const now = new Date();
//   this.currentTime = this.datePipe.transform(now, 'HH:mm:ss');
//   console.log('custome date update');
// }