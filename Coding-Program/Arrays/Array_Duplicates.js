console.log('Array Duplicates array of Values');

let arr = [0,0,1,2,3,4,3,5,5];

const dupLicatesArr = (arr) =>{
 if(arr.length === 0)  return 0;   
let  i = 0;
for(let j =1; j<arr.length; j++){
    if(arr[i] !== arr[j]){
      i++  
      arr[i] = arr[j];
    }
}
return i +1;
}

console.log(dupLicatesArr(arr));