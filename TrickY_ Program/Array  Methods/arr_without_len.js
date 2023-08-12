
let awh  = [45,6,7,8,9,0,23,56,7,8,34];

// array withought revere method using revere of array of value

for(let i= awh.length-1; i>=0; i--){
    console.log(awh[i]);
}

// 1 arr withought any  built method array finding length
const arrLenth = (par)=>{
    let length = 0;
    while(par[length]!==undefined){
        length++
    }
    return length;
}

// console.log(arrLenth(awh));

// const c;
// console.log(c)
// SyntaxError: Missing initializer in const declaration

// Multiple array of print all array of values

for(let  i=0; i<awh.length; i++){
    console.log('index' +i+"--" + awh[i]);
}

let  forin = ['apple','banana','orange'];

for(let item in forin){
    console.log("for in looop is :"+forin[item]);
}

forin.forEach((item)=>{
 console.log(item)
});


// Es6
let  forof = ['app','ban','ora'];

for(let val of forof){
    console.log(val);
}
