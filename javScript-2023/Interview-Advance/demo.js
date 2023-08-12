let arr = [2,3,4,6,7,8,9,10];

// filter method is check conditon is true return new array
let Newfilter  = arr.filter((item)=> item >= 8 )
console.log('Orignal Array',arr)  
console.log('filterArray create New array',Newfilter)


// map method is modify & Create New array 
let mapData = arr.map((item)=> item *2)
console.log('map New Modify  array', mapData); 

console.log('Orignal Array',arr)  

// For each Exssting array iterate
let b = arr.forEach((item)=>{
    if(item >= 5){
        console.log('only iterate array',item);  
    }
})
console.log('For each Method always return undefined',b)

// Reduce method is used two parameter  hold in current value & next values
let red =  arr.reduce((cv,nv)=>{
  return cv + nv;
})
console.log('Orignal Array',arr)  
console.log("reduce method is sum of array ", red);


//  slice method is create New array add remove elements

let str = ['Welcome' ,'Santosh', 'Pal' ,'Ashish', 'July','Aman', 'Raj', "Sani"];
let slic = str.slice(1,5);
console.log("original Data slice", str)
console.log("create new array New Shallow coppy ", slic)

// splice add or remove elements in exsting array;  
let arrNum = [12,25,30,45,78,96,45,63,90,100]
console.log("original Data in splice before", arrNum)
let spl = arrNum.splice(-1,-2,"WEb");
console.log("original Data in splice", arrNum)
console.log("splice is not retrun new array exsting array is modify",spl)


