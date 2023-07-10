let arrValue = [78,1,55,900,100 ,20 ,21,45];

let even = arrValue.filter((item)=>{
    return item % 2 === 0
})

let odd = arrValue.filter((item)=>{
    return item % 2 ==! 0
})

console.log('Odd Number in array values :',odd);
console.log('Even Number in array values :',even)


