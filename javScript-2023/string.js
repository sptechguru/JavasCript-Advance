let str = "    Hello World javascript World to Namasate World";
console.log(str.length);
console.log(str.split("").reverse().join());  //reverse string

let sl = str.slice(0,5);
console.log(sl)


let text1 = "      Please locate where 'locate' occurs!           ";
let index = text1.indexOf("occurs!");
console.log(text1.trim());


let replceContent = str.replace(/World/g, "good")
console.log(replceContent);
console.log(index);


let char = "Santosh Pal Happy Coding";
// let charIn = char.charAt()
let subStr = char.substring(0,5)
console.log('subStr...',subStr);



let string = "Programiz JavaScript Tutorials For Happy Coding Santosh ";

// first character
let substr1 = string.substring(0, 1);
console.log(substr1); // P

// if start > end, they are swapped
let substr2 = string.substring(1, 0);
console.log(substr2); // P

// From 11th to last character
let substr3 = string.substring(10);
console.log(substr3); // JavaScript Tutorials

// the extreme values are 0 and str.length

// same as string.substring(0)
let substr4 = string.substring(-44, 90);
console.log(substr4); // Programiz JavaScript Tutorials

// indexEnd is exclusive
let substr5 = string.substring(0, string.length - 1);
console.log(substr5); // Programiz JavaScript Tutorial



console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

let  text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]

let pattern1 = ".";
// only split string to maximum to parts
let newText1 = text.split(pattern1, 2);
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// using RegEx
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]