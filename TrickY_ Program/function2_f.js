var a= 0;

function b(){
a =10;
return  a = function(){}
}
b();

// console.log(a);

// output is  : = [Function: a] 

const test =()=>{
    const inner =() =>
    {
    return 100;
    }

    return inner()

    const inner3 =() =>
   {
    return 10;
    }
}
console.log(test());


// function test45 (){
//     function foo()
//     {
//     return 100;
//     }

//     return foo()

//     function foo()
//    {
//     return 10;
//     }
// }
// console.log(test45());
