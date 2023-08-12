let a = 50;
let b =  90;

//with using  third  variables
let temp = a;
a =  b;
b = temp;

//  withought third variables for usin g array destruring
[a,b] = [b,a]  
console.log(`a is Number is : ${a} & B Number is : ${b}`)
