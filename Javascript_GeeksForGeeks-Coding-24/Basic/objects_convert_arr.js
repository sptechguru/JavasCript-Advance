//  Ojects.keys() ,.values() for object convert in array 

let obj = {
    name: "santosh",
    age: 26,
    postion: ['Front End', 'MEAN', "MERN", "Full Stack"],
    company: {
        name: 'Viha Tech Pvt Ltd',
        postion: 'Ui Developer'
    },
    packages: {
        salary: '17 LPA' 
    }
};


let keys_value = Object.keys(obj)
let value = Object.values(obj)
console.log(keys_value)
console.log(value)


// For using Object(). entries

const arr = {
    java: {
        id: 1,
        title: "Java Programming",
    },
    python: {
        id: 2,
        title: "Python for Beginners",
    },
};


let object_entries = Object.entries(arr)
let Keys_value = Object.entries(obj).map(item => item[1]) //Keys item[0] //Values for item[1]

console.log(object_entries)
console.log(Keys_value)


//  now for Using fon in loop

let arrobjList = [];
for(let key in arr){
    // console.log(key);
    if(arr.hasOwnProperty(key)){
        arrobjList.push(arr[key]);
    }
}
console.log(arrobjList);


//  now for getOwnPropertyNames()

const res = Object.getOwnPropertyNames(obj).map((key) => obj[key]);
console.log(res);
