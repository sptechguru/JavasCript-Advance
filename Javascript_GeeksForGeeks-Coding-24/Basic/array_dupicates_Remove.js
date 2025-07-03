// Remove dupicate arr of item 


// let arr = ['Apple', 'Banana', "orange", "Lemon", 'Apple', "Banana"];


let arr = [
    "Manish", "Chandan", "Piyush",
    "Sunil", "Pankaj", "Piyush",
    "Pankaj", "Tiny", "Chandan",
    "Manish" 
  ];



const removeDuplicatearr = (arr) => {
   // return [... new Set(arr)]
    return arr.filter((item, index) => arr.indexOf(item) == index);   // for using build method of filter & index of

}
let arrNum = [1, 12, 5, 8, 7, 55, 12, 2]
console.log(removeDuplicatearr(arrNum));



const revmoveDuparrFor = (arr) => {
    let uniquearr = [];
    arr.forEach((item) => {
        if (!uniquearr.includes(item)) {
            uniquearr.push(item);
        }
    });
    return uniquearr;
}
console.log(revmoveDuparrFor(arr));


let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];
const removeDuplicates = (arr) => {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr2));




//  for loop cutom coding 

    let uniqeList = [];
    let count = 0;
    let  start = false;
    
    for(let i =0; i<arr.length; i++){
      for(let j=0; j<uniqeList.length; j++){
       
       if(arr[i] ==uniqeList[j]){
         start = true;
       }    
      }
      count++ 
      if(count == 1 && start == false){
        uniqeList.push(arr[i]);
      }
       count =0;
       start = false;
  }
    
    console.log(uniqeList);