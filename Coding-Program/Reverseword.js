console.log("Reverse all word");

let strWord = "Welcome Santosh Pal in Javascript";
const ReversWord = (str) => {
    // Level 0
    let res = str.split('').reverse().join('');
    return res;
}

console.log(ReversWord(strWord));


//  How to check Array Or Object for check Array.isArray()

const checkArrayOrobject = (data) => {
    return Array.isArray(data);
}

console.log(checkArrayOrobject({})) // false 
console.log(checkArrayOrobject([])) // true

//  how To array is Empty

let arr = [2, 5, 7, 9, 50, 20];
arr = [];
let Empty = arr.length = 0;
console.log(Empty) // op is []


//  How To check Number in integer or Not   inbuild isInteger()
let intData = 12.9;

const isCheckInteger = (num) => {
    if (num % 1 === 0) {
        console.log('This Number is integer', num);
    }
    else {
        console.log('Number is Not integer', num);
    }
}
console.log(isCheckInteger(2));


//  How to Make Duplicates arrray

const DuplicateArray  = (arr) =>{
    return arr.concat(arr);
}
console.log(DuplicateArray([1,2,3,4,5]));


const reverseNum  = (num) =>{
    let revNum = 0;
    while(num >0){
        let mod = num%10;
        revNum = revNum*10+mod;
        num = Math.floor(num/10);
    }
    return revNum;

}
console.log(reverseNum(12)) // Op is 21


//  How to Reverse string in Alphbetcally Order

const alphbetcally = (str) =>{
  return str.split('').sort().join('')
}
console.log(alphbetcally("apple"));
console.log(alphbetcally("santosh"));


//  How to array stirng data in first letter in uppercase 

const capitilizeFirst =  (str) =>{
var capitalLeter = str.split('').reverse().map((item)=>{
   return item.charAt(0).toUpperCase() + item.substring(1);
})
return capitalLeter.join('');
}
console.log(capitilizeFirst("hi bro how are you"));