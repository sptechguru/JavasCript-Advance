let str = "Santosh Kumar Pal";
let palNo = "MADAM";

const reVers = (str) => {
  let palindrome = str.split("").reverse().join("");
  return palindrome === str;
};

console.log(reVers("MADAM"));


const reMovedupl = (str) => {
  return [...new Set(str)].join("");
};

console.log(reMovedupl(palNo));


function areAnagrams(str1, str2) {
  const normalize = (str) => str.split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false

const KeyOfCount = (str) => {
  let count = {};
  for (let item of str) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
};
console.log(KeyOfCount(palNo));

const firstNonRepeatingChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
};
console.log(firstNonRepeatingChar("swiss")); // Output: "w"

console.log(firstNonRepeatingChar(str)); // Output: "w"
