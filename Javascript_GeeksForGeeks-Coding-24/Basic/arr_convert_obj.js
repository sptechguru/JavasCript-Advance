// arrObjects Data a Convert in objects.

let arr = [
    { fname: "Santosh", lname: 'Pal', postion: 'Full Stack'},
    { fname: "Sani", lname: 'Yadav', postion:  'Mern' },
    { fname: "Jay", lname: 'Pal', postion: 'Mean Stack'},
    { fname: "Sameer", lname: 'Yadav', postion:  'Java Full Stack' }
];


let createObj = new Map();
console.log(createObj);


let createdMap = new Map();
arr.reduce((map, obj) => {
    map.set(obj.fname, obj.lname);
    return map;
}, createdMap);
console.log("Created Map: ", createdMap);



const foreach = new Map();
arr.forEach((obj) => {
    foreach.set(obj.fname, obj.postion);
});
console.log("Created Map for Each: ", foreach);
