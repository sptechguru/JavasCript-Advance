console.log("Sorting for asendeing ...");

const arrSort = [300, 1400, 600, 1800, 90, 20, 67, 10];

function bubbleSort(arr, type) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, type);
            if (type === 'ASC') {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    // console.log('Asending Order');
                }
            }
            else {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    // console.log('Desending Order');
                }
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(arrSort, 'SSC'));


// level 2 for using for each Method

const BubbleSorting = (arr, type) => {
    arr.forEach((item, index) => {
        arr.forEach((el, Zedex) => {
            if (type === 'ASC') {
                if (arr[Zedex] > arr[Zedex + 1]) {
                    let temp = arr[Zedex];
                    arr[Zedex] = arr[Zedex + 1];
                    arr[Zedex + 1] = temp;
                    //  console.log('ASC.........');
                }
            }
            else {
                if (arr[Zedex] < arr[Zedex + 1]) {
                    let temp = arr[Zedex];
                    arr[Zedex] = arr[Zedex + 1];
                    arr[Zedex + 1] = temp;
                    //  console.log('DSC.........');
                }
            }
        });
    });
    return arr;

}

console.log(BubbleSorting(arrSort, 'ASC'));