console.log("array adavance Concepts..........");
const userData = [
    {
        id: 101,
        isActive: false,
        name: "santosh",
        developer: "Front End Developer",
        sallary: 50000,
    },
    {
        id: 102,
        isActive: true,
        name: "Sani",
        developer: "java Developer",
        sallary: 150000,
    },
    {
        id: 103,
        isActive: false,
        name: "Aman",
        developer: "Full stack Developer",
        sallary: 90000,
    },
    {
        id: 104,
        isActive: true,
        name: "Hemant",
        developer: "Mean Stack Developer",
        sallary: 100000,
    },
    {
        id: 105,
        isActive: true,
        name: "Raj Pal",
        developer: "Mern Stack Developer",
        sallary: 120000,
    },
];


const getActiveUser = (arr, type) => {
    let activeUser = [];

    // Level 0  Check User is Active Status for loop as Begginer
    for(let i= 0; i<arr.length; i++){
        if(arr[i].isActive == type){
            activeUser.push(arr[i].name)
        }
    }

    // Level 1  Check User is Active Status for using forEach method
     arr.forEach(item => {
        if(item.isActive === type){
            activeUser.push(item.name);
        }
     });

    // level 3 for using Chain method advance 
    activeUser = arr.filter((user) => user.isActive == type)
        .sort((user1, user2) => user1.sallary > user2.sallary ? 1 : -1)  // desseding order <  (asending >)
        .map((user) => user);
    return activeUser;
}

console.log(getActiveUser(userData, true));



// First Concept Level 0  Check User Name is Exist
const isCheckName = (uname, users) => {
    let exist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === uname)
            exist = true;
    }
    return exist;
};
console.log(isCheckName("Sani", userData));

// level 2  for using All Higer order function  do for Built javscript function
const isCheckName1 = (uname, users) => {
    // //levet 2 (A) for using findIndex Method
    const index = users.findIndex((user) => user.name == uname);
    // return index >=0

    //level 2 (B) for using find Method
    const userFind = users.find((user) => user.name == uname);
    // return Boolean(userFind);

    //level 2 (c) for using some Method
    const userSome = users.some((item) => item.name === uname);
    return userSome;
};
console.log(isCheckName1("Raj", userData));

// Second Concept for Adding Element to array values
let eleObj = {
    id: 104,
    isActive: false,
    name: "Yuaraj",
    developer: "Angular Developer",
    sallary: 80000,
};

const insertValue = (arr, ele) => {
    // arr.push(eleObj) // change Exsit array for Values
    // return arr;
    return [...arr, ele]; // spread ... create New array  Withought push method insert elemenets
};
// console.log(userData)
console.log(insertValue(userData, eleObj));

const arrValues = [222, 44, 222, 555, 700, 400, 44, 555, 1000, 1000,222];
const arrValues1 = ["Sandeep", "janu", "Akash", "Suman", "santosh", "Ajay" ,'Sandeep','santosh'];

const uniQueArray = (arr) => {
    //level (A) for using Set  Method is Unique data type is return
    return [...new Set(arr)];

    // //level (B) for using forEach Method
    // let uniQueElements = [];
    // arr.forEach((item) => {
    //  if(!uniQueElements.includes(item)){
    //     uniQueElements.push(item)
    //  }
    // })
    // return uniQueElements;

    // //level (c) for using reduce Method
    // return arr.reduce((acc,ele)=>{
    //     return acc.includes(ele) ? acc :[...acc,ele]
    // },[])
};
console.log('Orignal array',arrValues);
console.log("Array Uniques Values Showing :", uniQueArray(arrValues1));


const duplcateArrValues = (arr) => {
    // //level (1) for using filter & indexOf  Method this is showing duplicates Values
    return arr.filter((item, index, arr2) => {
        return arr.indexOf(item) !== index;
    });
};
console.log("This one showng Duplicates Values:", duplcateArrValues(arrValues));



const merGearray = (arr, arr2) => {
    //return [...arr,...arr2] for using spread opertor  
    const mergeArr = arr.concat(arr2)  // for using concat method
    return mergeArr;
}

console.log("merge Array:", merGearray(arrValues, arrValues1));