let arrData = [2,30,500,70,600,1000,2550];
let arrValue =  4;

const arrayTravesring = (arr)=> {

for(let i=0; i<=arr.length; i++){
    console.log('index of array is:',arr[i]);
}

arr.forEach((item,index,arr) => {
    console.log(`for using index: ${item} : index of arr is ${index} \n` );
});

}

console.log(arrayTravesring(arrData));