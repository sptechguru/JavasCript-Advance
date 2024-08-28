let arr = [45,78,90,20,60 ,30, 80 ,100];
console.log(arr.length);
console.log(arr.push({
    name:"santosh",
    lname:"Pal",
    age:25
}));
console.log(arr);
console.log(arr.pop());
console.log(arr);

let slc = ['a', 'b','c', 'd', 'e', 'f', 'g']
console.log(slc.splice(0,3))  //return  new array create for shallow copy 
console.log(slc);

let spl = ['a', 'b','c', 'd', 'e', 'f', 'g','h', 'i'];
console.log(arr.splice(0,3));          // exsting array changes remove elements
console.log(arr.reverse());
console.log(arr.join('-'));  // join convert data in string 
console.log(arr.concat(spl));  // Contcat method merge array  

let foreach =arr.forEach((item)=>{
    console.log(item);
})


let arrApdata2 = [
    {id:1, name: "santosh", age:20},
    {id:2, name: "sani", age:40},
    {id:3, name: "Akshay", age:20},
    {id:4, name: "Raj", age:50},
    {id:5, name: "Ravi", age:20},
]

let mapingData = arrApdata2.map((item, index, arr)=>{
    return item.age * 3;
})
console.log("maping data", mapingData.toString());   // array convert in string 
console.log("maping data2", arrApdata2);



let filteAge = arrApdata2.filter((item)=>{
    return item.name === 'santosh' && item.age === 20;
})
console.log(filteAge)

// input 
// out put 2,5,8,3,9,0,0

let  Arr = [2,0,5,8,0,3,9,0];
let dup1 = new Set(Arr);
console.log('duplicate arr ',dup1);
// dup[1] = '';
Arr.push(0,0)
console.log(Arr)


let pointsArr = [40, 100, 1, 5, 25, 10];

let  inc = arrApdata2.sort((a,b)=>{
    return a.age - b.age;   //array of object  for using incresing Order
})
console.log(inc);


let dec = arrApdata2.sort((a,b)=> b.age- a.age);
console.log(dec)  //array of object  for using Descresing  Order


const remoDuplicatesValueArr = (arr) =>{
   return arr.filter((item ,index,arr)=>{
       return arr.indexOf(item) !== index;
    })
}
console.log(remoDuplicatesValueArr(arrApdata2))



 let sortMethod = ((type,value)=>{
    return value.filter((value)=>{
        return value.sort((a,b)=>{
            if(type=='inc'){
              return a-b;
            }
            else{
                return b-a;
            }
           })
    })
});
console.log(sortMethod('inc',pointsArr));


//  How to find only index of Number's
let student=[
    {id:1,name:'abc'},
    {id:2,name:'xyz'},
    {id:3,name:'opq'}
];
let targetId = 2;
let indexValue = student.findIndex((item)=> item.id === targetId);
console.log(indexValue);

if(indexValue !== -1){
  console.log('index is Found ', indexValue);
}
else{
  console.log('index data is Not found',indexValue);
}



const candidate = [
    {name: 'Aman', age: 20, address: 'Indore'},
    
    {name: 'Suman', age: 80, address: 'Delhi'},
    
    {name: 'Arun', age: 10, address: 'Bhopal'},
    
    {name: 'Dhanaj', age: 15, address: 'Patna'},
    
    {name: 'Raghav', age: 700, address: 'Mumbai'}
    ];
    
  let newarr =  candidate.filter((item)=> item.age >20);

  console.log(newarr);

