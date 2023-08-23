
let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];

let arr = [5, 3, 7, 8, 10, 11, 14, 15];

const binarySearch = (arr, search) => {
    let start = 0;
    let end = arr.length - 1;
    let position = undefined;
    let mid = Math.floor((start + end) / 2);
    // console.log('Mid Value .......', mid);

    while (start <= end) {
        if (arr[mid] === search) {
            position = mid;
        }
        else if (arr[mid] < search) {
            position = mid + 1;
        }
        else {
            position = mid - 1;
        }
        break;
    }
    // console.log('position', position);
    return position;


}

let res = binarySearch(arrSort, 10);
console.log(res);