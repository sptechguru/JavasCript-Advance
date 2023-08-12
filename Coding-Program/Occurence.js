console.log("Check Occurnce how Many letter are reapeaated in obj")


const checkOccurence = (str)=>{
let occurnceWord = {};
let finalString =  str.toUpperCase().split('').forEach(item => {
    if(occurnceWord.hasOwnProperty(item) === false){
        occurnceWord[item] = 1;
    }
    else{
        occurnceWord[item]++;
    }
})
return  occurnceWord;
}
console.log(checkOccurence("santosh kumar pal"));
console.log(checkOccurence("madam"));   // Op  is { M: 2, A: 2, D: 1 }


const allDataTypeCheck = (data) =>{
 return typeof data;
}
console.log(allDataTypeCheck({}))
console.log(allDataTypeCheck([]))
console.log(allDataTypeCheck(undefined))
console.log(allDataTypeCheck(''))
console.log(allDataTypeCheck(45))
console.log(allDataTypeCheck(true))
console.log(allDataTypeCheck(null))
console.log(allDataTypeCheck(function () {}))



