let arr = ["C++", "Java", "JS", "Python"];
console.log("Original array: " + arr);

const toMove = arr[2];

const newArr = [
  ...arr.slice(0, 2),
  ...arr.slice(3),
     toMove
];
console.log(newArr);

let x = 3;
let pos = 1;

let temp = arr[x]

console.log(temp)

for(let i =x; i >=pos; i--){
  arr[i] = pos[i-1];
}
arr[pos] = temp;


console.log("After array: " + arr);

