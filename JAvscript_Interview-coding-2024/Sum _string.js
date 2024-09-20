let  str = 'ADF5HG8F1GHGH6';

let arr = str.match(/\d/g);  // only find Out Number 
console.log(arr);

let res = arr.reduce((num,item)=> num + parseInt(item),0);
console.log(res);