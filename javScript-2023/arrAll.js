// How to arr max to min mum number find
let arrValue = [78,1,55,900,100, 78, 55, 900];

const maxMethod =(arr) =>{
     return arr.reduce((prv,crv)=>{
        return prv > crv ? prv:crv      // greater than return max > Number in arr : 900
     //   return prv < crv ? prv:crv      // small than return min < Number in arr : 1
    })
}
console.log(maxMethod(arrValue));


//  some of arr values : 2167
let someOfArr = (arr) =>{
 return arr.reduce((prv, crv)=>{
    return prv + crv;
 })
}
console.log(someOfArr(arrValue));



//  Remove arr duplicates Values
const remoDuplicatesValueArr = (arr) =>{
 return arr.filter((item ,index,arr)=>{
    return arr.indexOf(item) !== index;
 })
}
console.log(remoDuplicatesValueArr(arrValue));


let arr1 = ['a','c','b','d','h','e','o'];
let arr2 = ['s' ,'a' ,'p','a', 'n', 'SS'];

let mergeArr = arr1.concat(arr2);
let mergeArr2 = [...arr1,...arr2]

console.log(mergeArr2)

let sortDes = mergeArr.sort((a,b)=>a-b);
console.log('sort Descending', sortDes)


let sortAes = mergeArr.sort((a,b)=> b-a);
console.log('sort Ascending', sortAes)



