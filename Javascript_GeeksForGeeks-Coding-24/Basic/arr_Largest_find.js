let arr = [1, 5, 6, 9, 14, 58, 100, 14, 50];

const findLargestArr = (arr) => {
  if (arr.length === 0) {
    console.log("Your array Is Blank");
    // throw new Error("Array is empty");
  } else {
    let max = arr[0];
    // step1 for using Loop
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {  // arr[i] < max) Min Value
        max = arr[i];
      }
    }

    // step 2 for using forEach Loop

    arr.forEach((num) => {
      // same as it is arr.filter()  & every()
      if (num > max) {
        max = num;
      }
    });
    return max;

    // step 3rd for using Max() & spred opertor
    return Math.max.apply(null, arr);
    return Math.max(...arr);

    // step 4th for using sort()
    arr.sort((a, b) => b - a);
    return arr[0];
  }
};

console.log(findLargestArr(arr));
