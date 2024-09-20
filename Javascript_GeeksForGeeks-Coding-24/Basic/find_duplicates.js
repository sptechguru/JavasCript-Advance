const findDuplicatearr = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) !== index);   // for using build method of filter & index of

}
const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(findDuplicatearr(arr));


const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

const ids = books.map(({ title }) => title);
console.log(ids)
const filtered = books.filter(({ title }, index) => !ids.includes(title, index + 1));
console.log(filtered);


const res = books.filter((item, index) => {
    let data = index === books.findIndex(o => item.title === o.title);
    console.log(data);
    return data;
});
console.log(res)


const arr2 = [
    { name: "Ram", age: 17 },
    { name: "Shyam", age: 17 },
    { name: "Mohan", age: 30 },
    { name: "Shyam", age: 17 },
    { name: "Sohan", age: 30 },
];

let res2 = arr2.reduce((acc, value) => {
    // console.log(value.age)
    if (!acc.includes(value.age)) {
        acc.push(value.age)
    }
    return acc;
}, [])


let uniqueValues = arr2.map((item)=> item.name).filter((value, index,arrValue) => arrValue.indexOf(value) == index )
console.log(uniqueValues)


console.log(res2);   //  op [17,30]  ,[Ram ,shyam, mohan, sohan]