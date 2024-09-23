
//   count of occurence in for Examples

let inputArr = [1, 3, 4, 3, 4, 1, 3, 3, 3, 4]
//Output: {"1": 2, "3" : 5, "4" 3}

let arr = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4, 'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];
// console.log(arr)

const itemCounter = (value, index) => {
    return value.filter((x) => x == index).length;
};
console.log('countValue' +itemCounter(arr, 'Javascript'))



let count = {};
for (let item of arr) {
    if (count[item]) {
        count[item] += 1;
    }
    else {
        count[item] = 1;
    }
}
console.log(count)



const sortedArr = inputArr.slice().sort();
let counter = {};
for (let index = 0; index < sortedArr.length; index++) {
    let item = sortedArr[index];
    if (counter[item]) {
        counter[item] += 1;
    }
    else {
        counter[item] = 1;
    }
}
console.log(counter)