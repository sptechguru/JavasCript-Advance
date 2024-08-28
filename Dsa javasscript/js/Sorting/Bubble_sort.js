let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];
let data = [40, 30, 12, 25];

const bubbleSort = (arr, order) => {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
        if(order === 'ASC'){
            if (arr[j] >= arr[j + 1]) {
                // var temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;

                //Swapping Withought using Third vairaibles
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
         }
            else{
                if (arr[j] <= arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                //Swapping
                // [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
                }
            }
        }
    }
    return arr;
}
let res = bubbleSort(arrSort, 'ASC');
console.log('Bubble Sort :-',res);
