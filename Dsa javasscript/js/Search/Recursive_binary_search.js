
let arrSort = [4, 5, 68, 10, 20, 25, 30, 35, 40, 60];
// let arr = [5, 3, 7, 8, 10, 11, 14, 15];
let start = 0;
let end = arrSort.length - 1;
let position = undefined;

const recursiveBinarySearch = (arr, start ,end,search_Item) => {
    let mid = Math.floor((start + end) / 2);
    // console.log('Mid Value .......', mid);
    if(arr[mid] === search_Item){
        position = mid;
        return true;
    }
    else if(arr[mid] < search_Item){
        recursiveBinarySearch(arr,mid +1 ,end,search_Item);
    }
    else{
        recursiveBinarySearch(arr,start, mid-1,search_Item);
    }
    return position;
}

let res = recursiveBinarySearch(arrSort,start,end, 60);
console.log(res);