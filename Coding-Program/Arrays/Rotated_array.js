// Write a program given array is Rotated  largets array elements  k = 3
// Input   [1,2,34,2,3,36]  // Opis 36
// output  [10,15,12]  // Op is 15

let arr1  = [1,2,3,4,5,6,7];

const  roateaTedArray = (arr,count)=>{
    let size = arr.length;
    if(count > size){
       count = count % size;
    }
    const rotatedArr = arr.splice(size-count, size);
    arr.unshift(...rotatedArr);
     
 return arr;
}

// console.log(roateaTedArray(arr1,3));


const  reverseArray = (nums ,left , right) =>{
    while(left < right){
       let temp = nums[left];
       nums[left++] = nums[right];
       nums[right--] = temp;
    }
}

const  roateaTedArrayOptimize = (arr,count)=>{
    let size = arr.length;
    if(size > count){
       count = count % size;
    }
    reverseArray(arr , 0, arr.length-1);
    reverseArray(arr , 0, count-1);
    reverseArray(arr , count, arr.length-1);
    
    return arr;
}
console.log(roateaTedArrayOptimize(arr1,3));


