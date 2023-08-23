// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const mergeTwoLists = (list1, list2) => {
    let merge = [...list1 , ...list2]
     merge.sort((a,b)=>{
        return a-b;
    })
    return merge;
}

console.log(mergeTwoLists([1,2,4],[1,3,4]));


function mergeArrays(list1, list2) {
    let result = [];
    let i = 0;
    let j = 0;  
    for (let k = 0; k < list1.length + list2.length; k++) {
      if (i < list1.length && (j >= list2.length || list1[i] < list2[j])) {
        result.push(list1[i]);
        i++;
      } 
      else {
        result.push(list2[j]);
        j++;
      }
    }  
    return result;
  }
  
  const list1 = [1, 2, 4];
  const list2 = [1, 3, 4];
  const mergedArray = mergeArrays(list1, list2);
  console.log(mergedArray); // Output: [1, 1, 2, 3, 4, 4]  


const plusOne = (digits) => {
    let sum = digits.reduce((cv,pv)=>{
        return cv+pv;
    });
}
console.log(plusOne([1,2,3]));


// 1.https://leetcode.com/problems/merge-two-sorted-lists/
// 2.https://leetcode.com/problems/plus-one/
// 3.https://leetcode.com/problems/longest-common-subsequence/

