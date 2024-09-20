let arr = ['Apple', 'Banana', "orange", "Lemon"];
console.log(arr.length);
let res = arr.pop();  // Remove elements of last array value;
console.log(arr, arr.length);


let shif = arr.shift();
console.log(shif)  // Remove forom Staring  values of array 
console.log(arr)


let spli = arr.splice(0, arr.length);
console.log(spli); // Remove prefix indexing array value
console.log(arr)

let arrNum = [10, 25, 30, -10, 32, -35];
let resNum = arrNum.filter((item) => item > 0);
console.log(resNum);



const arrRvemove = (arr, num) => {     // Remove arr of Dynamic values for cutom method
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

let num = 30;
console.log(arrRvemove(arrNum, num));





