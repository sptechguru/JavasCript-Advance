console.log('Anagram is string both string compare & length & Charratcters');

const anaGramString = (str, comstr)=>{
let countStr = {};
if(str.length !== comstr.length){
    return false;
}

for(let item of str){
    countStr[item] = (countStr[item] || 0) +1;
    // console.log(countStr[item]);
}
for(let com of comstr){
    if(!comstr[com]){
        return false;
    }
    countStr[com] -=1
}
return true;
}

console.log(anaGramString('Hello','lleHo'));