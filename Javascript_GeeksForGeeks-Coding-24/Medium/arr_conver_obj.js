let arr = [1, 5, 9, 8, 874, 25, 65];

let sum =0;
for (let index = 0; index < arr.length; index++) {
     sum +=  arr[index]
   
}
// Calculation the sum using forEach
arr.forEach(x => {
    sum += x;
});
console.log(sum)



let objCount = {};
for (let i = 0; i < arr.length; i++) {
  objCount[i] = arr[i];
}

const arrRed = arr.reduce((acc, current, i) => {
  acc[current] = i;
  return acc;
}, {});

console.log("Reduce Method", arrRed);

let arrObj = { ...arr }; // for using spreade opertor
console.log(arrObj);

let arr2 = [
  ["JS", "JavaScript"],
  ["GFG", "GeeksforGeeks"],
];
let obj = Object.fromEntries(arr2);

console.log(obj);
console.log(objCount);
