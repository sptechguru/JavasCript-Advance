
console.log("Array is  Destructuring is packed of data is a inside varibles which is value  used indexing through.. ");

let arr = ['apple' ,'banana','kiwi','mango'];
let next_arr = ['e','f','g','h','g','h'];

let [index,,,...in1] = arr;
console.log(in1);

// that is array concat & bind 
let res = [arr,...next_arr];

console.log(res);