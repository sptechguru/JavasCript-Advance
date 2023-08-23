console.log("Array Delete Element value  Method........");

let arrayDelete = [60,40,30,90,76,67,500,600];
let index = 1;

console.warn(arrayDelete,"length:is Before",arrayDelete.length);

for(let i=index; i<arrayDelete.length-1; i++){
    arrayDelete[i] = arrayDelete[i+1];
}
arrayDelete.length = arrayDelete.length-1;

console.warn(arrayDelete,"length:is After",arrayDelete.length);
