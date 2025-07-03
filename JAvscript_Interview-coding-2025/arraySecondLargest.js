//  Find a array in Second Largest in Array


let arr = [9,3,7,3,0,1];
let largest = arr[0]
let secondlargest = -99999999;

for(let i =0; i<arr.length; i++){
 if(arr[i] > largest ){
    secondlargest = largest;
    largest = secondlargest;
    }
    else if(arr[i] > secondlargest && arr[i] < largest){
        secondlargest = arr[i]
    }
}
console.log(secondlargest);
