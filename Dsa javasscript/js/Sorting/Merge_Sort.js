let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];
let data = [8, 20, -2, 4, -6];

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let midValue = Math.floor(arr.length / 2);
    // console.log('Midvlaue ', midValue);
    let left = arr.slice(0, midValue);
    let right = arr.slice(midValue);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArr, rightArr) => {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {  // this Sign changes in Desending order for (>=)
            sortedArr.push(leftArr.shift());
        }
        else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(data));
console.log(mergeSort(arrSort));
