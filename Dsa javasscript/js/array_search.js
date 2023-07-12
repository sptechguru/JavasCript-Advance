console.log("Array Linear search data in ");

let arrSearch = ["Santosh", "Rohan", "Raj", "Ashish", "Ajay", "Babulu"];
let searchTerm = "Raj";
// let arrSearch =[60,40,30,90,76,67,500,600];
// let searchTerm = 500;
let index = undefined;

for (let i = 0; i < arrSearch.length - 1; i++) {
    // console.log(arrSearch[i]);
    if (arrSearch[i] === searchTerm) {
        index = i;
        break;
    }
}

console.log("Search Item Index  is :", index)

console.log(arrSearch)

// level2 By Defaut Search  Method is indexOf()
console.warn('Default Search Method is :', arrSearch.indexOf(searchTerm))


// level 3 By Defaut Delete  Method is indexOf()
console.warn('Default Delete Method is :', arrSearch.splice(2, 1))
console.log(arrSearch); 