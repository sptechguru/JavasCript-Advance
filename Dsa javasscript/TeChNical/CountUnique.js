console.log("Count Unique value of array already array is shorted");

let arrData = [1,2,2,,3,4,5,6,7,8,8,8];

const countUnique = (arr) =>{
if(arr.length > 0 ){
    let num = 0;
    for(let j =1; j<arr.length; j++){
       if(arr[num] !== arr[j]){
        num++;
        arr[num] =arr[j];
       }
    }
    return num +1;
}
else{
    throw new Error('Array is Empty')
}
}
console.log(countUnique(arrData));
console.log(countUnique([]));
