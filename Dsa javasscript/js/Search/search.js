let sortArr = [4,5,68,10,20,25,30];
let find = 20;

const linearSearch = (arr,search) =>{
    let postion = undefined;
    for(let i =0; i<arr.length; i++){
        if(arr[i] == search){
           postion = i
           break;
        }
    }
    if(!postion){
        console.log('Array Element is Not found ??')
    }
    return postion;
}

let res = linearSearch(sortArr, 30);
console.log(res);
