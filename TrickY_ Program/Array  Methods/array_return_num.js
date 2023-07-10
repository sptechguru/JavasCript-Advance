const numberOnly = (arr)=>{
    return arr.filter(arr => typeof arr == "number");
}

console.log(numberOnly(['sani',4,6,7]));


// 2nd array of unique  value of 

const arrUnique_val=(item)=>{
 let list = [];
 for(let i = 0; i<item.length; i++){
 if(list.indexOf(item[i]) == -1)
 console.log(list.push(item[i]));
 }
 return list;
}

let str = ['a','b','c','d','e','f','a','e','i','o','u','b','d'];

let res = arrUnique_val(str);

console.log(res);
console.log(res.length);


//  count array duplicate value show

const duplicate_ArrValshow = (val) =>{
    let count = 0;
    for(let i=0; i<val.length; i++){
        console.log("outerloop is::",val[i]);
        for(let j=i+1; j<val.length; j++){
        console.log("innerloop is::",val[j]);
          if (val[i] == val[j]){
              count++;
              break;
          }
        }
       return count;
    }
}

let show = ["apple",'banana',"mango","grapes","mango","apple","mango"];

let data = duplicate_ArrValshow(show);

console.log('Duplicate array values ::'+data);