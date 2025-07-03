// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


let arr = [3,0,4,0,5,0,6,0,8,0,10];

const nonZero = (arr) =>{
let nonZero = [];
let zeros = [];
for(let i =0 ; i<arr.length; i++){
    if(arr[i]!==0){
        nonZero.push(arr[i]);
    }
    else{
     zeros.push(arr[i]);
    }
}
const merge = [...nonZero, ...zeros]
return merge;
    
}

console.log(nonZero(arr));