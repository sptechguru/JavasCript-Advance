// Find a Duplcate count in array;

const arr = ['one', "two" ,"three", "two" ,"three" ,'one', "two" ];
let count = {};

arr.forEach((item)=>{
 count[item] =  (count [item] || 0) + 1;
})

console.log(count);


function multiply(num1){
    return function(num2) {
        console.log(num1*num2);
    }
}
