const arr = [1, 2, 3, [2, [34, 65]]];

const flat = arr.flat(Infinity);
console.log(flat)

const flatArr=(array) => {
  let res = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      res.push(...flatArr(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flatArr(arr));
