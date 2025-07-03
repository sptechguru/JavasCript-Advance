
const arr = [10, 72, 3, 14, 5];

let findVale = 10;
let res = arr.includes(findVale);
let result = arr.find(element => element === findVale);
console.log(result)

result = false;
for(let i=0; i<arr.length; i++){
   if(arr[i] == findVale){
    result = true;
    break;
   }
}

//  for Using ternarry opertor consdition single line
let op = result ? "Item is Found": "Not Found ";
op = result;
console.log(op, +result +'OutPut Ternrany')


//  for Using filter Method
const checkElement = (arr, element) => arr.filter(el => el === element).length > 0;
console.log('Check arr ', checkElement(arr, findVale))
result =  checkElement(arr, findVale);



if(result) {   //res  (arr2.indexOf(3) >= 0) // arr.include(45)
    console.log('item is Found' , result)

}
else[
    console.log('................item is Not Found...............')
]