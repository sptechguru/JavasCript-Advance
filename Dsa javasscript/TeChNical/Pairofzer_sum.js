console.log('Sum of Pair Zero Dsa Program ');
let arrValue = [-5, -4, -3, -2, 0, 2, 4, 6, 7, 8];

const sumZeroPair = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return array[i], array[j]
            }

        }
    }
}
console.log(sumZeroPair(arrValue));
// quardratic  Time Complexity  0(n^)2  This Program two loops are used ;
const pairOfZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let sum = '';
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === 0) {
            return arr[left], arr[right];
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
    return sum;
}
console.log(pairOfZero(arrValue));
// Linear  Time Complexity  0(n)  This Program one loops are used ;




