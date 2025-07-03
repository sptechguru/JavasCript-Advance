let arrData = [11,42,53,14,85,16,77,48,79,2,10];

const smalletsArray = (arr)=>{
    for(let i =0; i<=arr.length; i++){
            for(let j =0; i<=arr.length; i++){
              if(arr[j] <= arr[j+1]){
                  let temp = arr[j];
                  arr[j] = arr[j+1]
                  arr[j+1] = temp;
              }
            }
        }
        return arr[2];
}
console.log(smalletsArray(arrData));



let arr2  =  [1,2,3,3,2,9,3];
let res = [...new Set(arr2)];
console.log(res);

const findUniqueNuber = (arr)=>{
let res = arr.filter((item,index)=> arr.indexOf(item) === index);
return res;
}

console.log(findUniqueNuber(arr2));


const getCurrentTime = () =>{
    const now = new Date();
    const hours = formatTimeComponent(now.getHours());
    const minutes = formatTimeComponent(now.getMinutes());
    const seconds = formatTimeComponent(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

const formatTimeComponent = (data)=> {
    return data < 10 ? '0' + data : data;
}
// Example usage:
const currentTime = getCurrentTime();
console.log("Current time in HH:MM:SS format:", currentTime);





