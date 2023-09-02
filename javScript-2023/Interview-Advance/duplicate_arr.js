//  find array Duplicates value
let dupArr = [2, 2, 2, 1, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 5];
let dupArrData = [1, 2, 3, 2, 5, 6, 1, 7, 8, 9, 9];
//OP [2,3,4,5]


const duplicateArr = (dupArr) => {
    let duplicateValue = [];
    let checkNum = {};
    let checkduplicateMap = {}
    for (let i = 0; i < dupArr.length; i++) {
        let item = dupArr[i];
        if (checkNum[item] && !checkduplicateMap[item]) {
            duplicateValue.push(item);
            console.log("if block called", duplicateValue)
            checkduplicateMap[item] = true;
        }
        else {
            checkNum[item] = true;
            console.log("else block called", checkduplicateMap)
        }
    }
    return duplicateValue;

    // console.log(duplicateValue)
}

console.log(duplicateArr(dupArrData));



let arrString = ['Mango', "Apple", "Orange", "Graphes"];
// OP  [
//     {
//         'Mango':5,
//         'Orange':6    }
//  ]


const strCount = (arrStr) => {
    let finarr = [];
    for (let i = 0; i < arrStr.length; i++) {
        // console.log(arrStr[i]);
        finarr.push({
            [arrStr[i]]: arrStr[i].length
        })
    }
    return finarr;
}

console.log(strCount(arrString));


let arr = [1, 2, 3, 5]   // Op is [4,6,7,8,9,10]
// for something check should create new array 

const checkArrayMissingNum = (arr,count)=>{
let store = [];
for (let i = 1; i <= count; i++) {
    if(!arr.includes(i)){
        store.push(i);  
    }
    // !arr.includes(i) ? store.push(i) : ''
}
return store;
}
console.log('Array Misssing Number show is :', checkArrayMissingNum(arr,10));

