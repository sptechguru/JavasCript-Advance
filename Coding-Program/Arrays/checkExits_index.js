let arrData = [1,2,3,4,5,6,7,8,10];

const checkArryIndex = (arr) =>{
    if(arr.indexOf(12) !== -1){
      console.log("Elemnet is Found");
    }
    else{
        console.log("Elemnet is Not Found");
    }
}

console.log(checkArryIndex(arrData));

let newarr = arrData.map((item)=>{
    return  item*10;
});

let forArr = arrData.forEach((item)=>{
    return  item +1 ;
});

console.log('For Each ....',forArr);

console.log('Map method is return new array',newarr)