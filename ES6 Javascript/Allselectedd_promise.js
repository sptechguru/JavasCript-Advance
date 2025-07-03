// Whast is Promises ?
// Promises in javaScript represent process that are allready happenning 
// Which can be chainned With Callback functions A Promise is said to be settled if it is either 
// fullifilled or rejected &pending 
// 1) Promise.allSettled[] is show status and value
// 2) Promise.race[] is show promice 1st time executed
// 3) Promise.all[] is show promise resolve & rejected show is Error

let task = Promise.allSettled([
    new Promise((res,rej)=>{
        setTimeout(() =>{
            rej("2 second promise is resolve");
        },2000)
    }),

    new Promise((res,rej)=>{
        setTimeout(()=>{
            res("4th promise is Rejected");
        },4000)
      }),

    new Promise((res,rej)=>{
      setTimeout(()=>{
          res("3rd promise is resolved");
      },3000)
    }),
    new Promise((res,rej)=>{
        setTimeout(()=>{
            res("10th promise is resolved");
        },10000)
      })
])
task.then((item)=>{
    console.log("Then Block is show in promise",item);
})
.catch((err)=>{
    console.log("Catch Block solve is Error",err);
})
