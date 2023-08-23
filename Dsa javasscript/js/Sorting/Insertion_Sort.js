let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];
// arrry traversing for Reverse order of view
let arr = [40, 30, 12, 25];


const Insertion_Sort = (arr) => {
    let current = undefined; let j;
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] < current) {   // this arrrow change in Asc(>) by default is Des
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = current;
    }


    return arr;
}

console.log(Insertion_Sort(arr));

