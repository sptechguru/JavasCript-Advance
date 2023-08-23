let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];
let data = [8, 20, -2, 4, -6];


const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
    console.log('pivot mid value ', pivot)

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {   //   > this sign is chages for assending & Des
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(data));
// console.log(quickSort(arrSort));
