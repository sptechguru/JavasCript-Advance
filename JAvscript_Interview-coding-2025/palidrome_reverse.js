
let arr = "assayiyddddrhjskwg";  // output=“assa”,”ss”,”yiy”,”dd”,”ddd”,”dddd";

const reverSeString = (arr) =>{
    let result = [];
    let sequence = "";
    for(let i=0; i<arr.length; i++){
        sequence += arr[i];
      if(arr[i] !== arr[i+1]){
        if(sequence.length >1 ){
        result.push(sequence);
        }  
        sequence = "";
      }
    }
    return result;
}
console.log(reverSeString(arr))



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const reverSeString2 = (arr) =>{
    let result = [];
    let sequence = "";
    for(let i = 0; i<arr.length; i++){
        sequence = arr[i];
        
       for(let j = i+1; j<=arr.length; j++){
           sequence += arr[j];
           
          if(sequence === "assa" || sequence === "ss" ||sequence === "yiy" || sequence === "dd" 
            || sequence === "ddd" || sequence === "dddd"){
            result.push(sequence);
            sequence = "";
          }
        }
    }
    return result;
}
console.log(reverSeString2(arr))


// for short way 

const input = "assayiyddddrhjskwg";
const patterns = ["assa", "ss", "yiy", "dd", "ddd", "dddd"];
const output = patterns.filter(item => input.includes(item));
console.log(output);
