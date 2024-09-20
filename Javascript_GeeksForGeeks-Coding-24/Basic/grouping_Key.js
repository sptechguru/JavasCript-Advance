// arrObjects Convert in obj key of Mean & mean Data showing object form {}

let arr = [
    { fname: "Santosh", lname: 'Pal', postion: 'Full ' },
    { fname: "Sani", lname: 'Yadav', postion: 'Mern' },
    { fname: "Jay", lname: 'Pal', postion: 'Mean' },
    { fname: "Sameer", lname: 'Yadav', postion: 'Java Full' }
];


let groupingData = {};

for (let item of arr) {
    const postion = item.fname;
    if (!groupingData[postion]) {
        groupingData[postion] = item;
    }
    else {
        groupingData[postion].push(item)
    }
}

console.log(groupingData)


const resultArray = Object.values(groupingData);
// console.log(resultArray);