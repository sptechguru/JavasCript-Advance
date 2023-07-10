var a = 30;
{
  var b = 40;
  {
    var a = 50;
    console.log(a + b);
  }
  console.log(a + b);
}

let a = 30;
{
  let b = 40;
  {
    let a = 50;
    console.log(a + b);
  }
  console.log(a + b);
}
// let st = "santosh";
// console.log(`hello ${'st'}`);
// console.log(`hello ${st}`);
// console.log(`hello ${1}`);

var a = 10;
var b = (a = 20);

console.log(a + b);

let x, y, z;
x = y = z = 6 + 6;
console.log(x);
console.log(y);
console.log(z);

console.log(3 ** 2);
console.log(3 ** 3);

let a = 100;
let b = ++a;

console.log(a);

let a1 = 100;
let b1 = a1++;

console.log(a1);

let num = 0;
num++;
++num;
console.log(num);

console.log("100" - 5);

console.log("1" + 2 + 3 + 4 + 5);
console.log(1 + 2 + 3 + 4 + "5");

console.log(1 + 2 + "3" + 4 + "5");
