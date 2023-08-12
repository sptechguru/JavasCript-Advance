// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Interview out put Questions!");
function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },1000);
  var x = 2;
  let y = 12;
}
let res = func1();
 console.log("Set time out in ",res);


function func2(){
  for(let  i = 0; i <= 3; i++){
    setTimeout(()=>{
     console.log('s',i);
    },1000)
}
}
console.log("looping function",func2());   // Op is 333



// for using iife function  

(()=>{
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
  })();



  function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
  }
  console.log(runFunc());
  
  // Code 3:
  
  let a = 0;
  let b = false;     // is 0 &  true is 1
  console.log((a == b));
  console.log((a === b));