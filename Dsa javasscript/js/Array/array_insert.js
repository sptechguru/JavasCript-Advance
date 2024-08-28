console.log("Array inserting value withought push() Method........");
let arrayData = [60,40,30,90,76,67];
let insertValue = 500;
let postion = 1;

for(let i= arrayData.length-1; i>=0;  i--){
    // console.log(arrayData[i]);
    if(i >= postion){
        arrayData[i+1] = arrayData[i];
        if(i== postion){
            arrayData[i] = insertValue;
        }
    }
}
console.log(`Array insert values is :${insertValue}`,arrayData);

// Level 2 for javascript Build Method in splice()
let arrayData2 = [25, 70, 80, 100]
let spl = arrayData2.splice(1,0,5000);
console.log(arrayData2)