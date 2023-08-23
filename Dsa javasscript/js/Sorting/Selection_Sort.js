let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];   // arrry traversing oin front of view
let arr = [40, 30, 12, 25];

const selecTionSort = (arr, order) => {
    let midValue = undefined;
    for (let i = 0; i < arr.length; i++) {
        midValue = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (order === 'ASC') {
                if (arr[j] < arr[midValue]) {
                    midValue = j;
                }
                //   console.log("Asc....");
            }
            else {
                if (arr[j] > arr[midValue]) {
                    midValue = j;
                }
                //   console.log("Dsc....");
            }

        }
        let temp = arr[midValue];
        arr[midValue] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selecTionSort(arrSort, 'ASC'));
console.log(selecTionSort(arr, 'DASC'));
