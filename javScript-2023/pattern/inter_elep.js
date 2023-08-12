
// let i,j;
let str = '';
for(let i =1; i<=8; i++){
    // console.log('i loop',i);
str += "";
for(let j =0; j<i; j++){
  // console.log('j loop',(i+j) *2);
  str += (i+j) *2;
}
str += "\n";
}

console.log(str);



let number = 357;  // op is 15
let stringNumber = number.toString();
console.log('stringNumber is ... ' ,stringNumber);
console.log('stringNumber is ... ',typeof stringNumber);
let store = 0;
for(let i =0; i<stringNumber.length; i++){
 store += parseInt(stringNumber[i]);
}
console.log('Store is sum of ',store);

//  level 2 for using built Method 
let arrConvert = stringNumber.split("");
console.log('split..',arrConvert); // Output: string
let total = arrConvert.reduce((cr,nv)=>{
 return cr+parseInt(nv);
},0)

console.log('Sum of total is ',total);