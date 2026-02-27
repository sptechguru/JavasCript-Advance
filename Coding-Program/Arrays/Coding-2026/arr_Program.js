//  shifting arr for zero pos changes

let arr = [1, 0, 5, 0, 4, 5, 0];  // Output   [1, 3, 4, 5, 0, 0, 0]

const shiftedZero = (arr) => {
  let pos = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // let i =1; for max & min
    if (arr[i] !== 0) {
      let temp = arr[pos];
      arr[pos] = arr[i];
      arr[i] = temp;
      pos++;
    }
    // if(arr[i] > max){    arr max value finc
    //     max = arr[i];
    // }
  }
  return arr; // retur max
};
console.log("run program", shiftedZero(arr));

let firsPeakArr = [1, 3, 2, 4, 1]; // Op is 3
const firstPeakValue = (arr) => {
  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[j] > arr[j - 1] && arr[j] > arr[j + 1]) {
      return arr[j];
    }
  }
};
console.log("First Peak Value", firstPeakValue(firsPeakArr));

const seCondLargestArrNumb = (arr) => {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
};
console.log("Arr Second Largest", seCondLargestArrNumb(arr));

const arrDuplicateNum = (arrList) => {
  let result = [];
  let obj = {};
  for (let item of arrList) {
    if (obj[item]) {
      result.push(item);
    } else {
      obj[item] = true;
    }
  }
  return result;
};
console.log("Duplicate Number", arrDuplicateNum([1, 2, 3, 2, 1, 4]));

const uniqueNumbers = (arrList) => {
  let result = [];
  let obj = {};
  for (let item of arrList) {
    if (!obj[item]) {
      obj[item] = true;
      result.push(item);
    }
  }
  return result;
};

// inbuid method


const uniqueNumbersArr = arr.filter((item, index, array) => {
  return array.indexOf(item) === index;
});
console.log("Unique Numbers: for fillter method", uniqueNumbersArr);

let duplicatesArrNum = arrList.filter((item, index, array) => {
  return array.indexOf(item) !== index;
});
console.log("duplicatesArrNum: for fillter method", duplicatesArrNum);
