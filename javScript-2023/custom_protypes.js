let arrNumbers = [4, 100, 500, 200, 600, 800, 6, 10, 200, 900, 600, 10, 500];

let dup =  new Set(arrNumbers);
console.log("array unique values", dup);

const DuplicateArray =  arrNumbers.filter((item, index,arr)=>{
    return arr.indexOf(item) !== index;
})
console.log("duplicate array values", DuplicateArray)


Array.prototype.MycutomMap = function (callback) {
    let arrData = [];
    for (let i = 0; i < this.length; i++) {
        arrData.push(callback(this[i], i, this));
    }
    return arrData;
}

let mapRes = arrNumbers.map((item => item * 2)).sort();
// console.log("Map defult ", mapRes);

let res = arrNumbers.MycutomMap((item) => item * 2)
console.log("cutom Map", res);

//  array to convert in objects using Protypes Methods

let cities = ['indore', 'Bhopal', "Lucknow"];
Array.prototype.converArraytoObject = function () {
    let newobj = {}
    this.forEach((item) => {
        newobj[item] = item;
    })
    return newobj;
}
console.log(cities.converArraytoObject());


let se = { name: "Aman", hobbies: "Dancing" };
// Object.freeze(se); // not change object data for freeze 
Object.seal(se); // its 'change object data for  overide values
se.name = 'Santosh'
se.hobbies = 'Computer games'
console.log('seal', se);



//  custom  array for filter method for using chain method
let arrApdata = [
    { id: 1, name: "santosh", age: 20, isActive: true },
    { id: 2, name: "sani", age: 40, isActive: false },
    { id: 3, name: "Akshay", age: 50, isActive: true },
    { id: 4, name: "Raj", age: 50, isActive: false },
    { id: 5, name: "Ravi", age: 20, isActive: true },
]

let chain = arrApdata.filter((item) => item.age == 50)
    //  .sort((a,b)=> a.name > b.name ? 1: -1)
    .sort((a, b) => a.age < b.age ? 1 : -1)
    .MycutomMap((user) => user)
console.log(chain);


//  get string length  count 

const getLength = (str) => {
    let count = 0;
    let i = 0;
    while (true) {
        if (typeof str[i] === 'undefined') {
            break;
        }
        count = count + 1;
        i++;
    }
    return count;
}
console.dir(console);
console.log(getLength("santosh Kumar Pal"));

// reverse string 

const ReverString = (data) =>{
    let strData = '';
    for(let i = data.length -1; i>=0; i-- ){
      strData += data[i];
    //   strData = strData + data[i];

    }
    return strData;
}
let arr2 = "Santosh Pal";
console.log(ReverString(arr2))







