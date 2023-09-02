console.log("Welcome to programiz.......");
 //1  Find the missing number from given array input 

 let arr = [1,2,3,5]   // Op is [4,6,7,8,9,10]
 let count = 100;
 let store = [];

 // for something check should create new array 
 for (let i=1; i<=count; i++){
 !arr.includes(i) ? store.push(i) : ''
 }
 console.log('Array Misssing Number show is :',store);


 //2  Replace underscore  with spraces & Capitilize Words that is input here
let stringRemove_ = 'santosh_kumar_pal';  // Op is : Santosh Kumar Pal
let stringAdd_ = 'Angular Devloper';  // Op is : angular_developer
 const replace_Undescore = (str)=>{
 // 1 string convert in array replace undescore; 
//  let arrChange = str.split("_");
 let arrChange = str.split(" ");
 console.log(arrChange);

 // 2 iterate in loop here

 /*
 for(let i =0; i<arrChange.length; i++){
  arrChange[i] = arrChange[i].charAt(0).toUpperCase()+ arrChange[i].slice(1); 
 }
 this logic showing in  Op is : Santosh Kumar Pal
 */

 //this logic showing in  Op is : angular_developer
 for(let j =0; j<arrChange.length; j++){
    if(j===0){
      arrChange[j] =arrChange[j].toLowerCase();
      continue;
    }
    arrChange[j] ="_" +arrChange[j].toLowerCase();
 }
 // concat string in join method are used
 let conStr = arrChange.join(" ");
 return conStr;
 }
 console.log(replace_Undescore(stringAdd_));





