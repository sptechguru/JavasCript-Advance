// promise is used in call back fuction two parametes is resolve reject

let data = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve(10);   
        // reject(); is show in error
    },2000)
})

data.then((res) =>{
    console.log("promise is resolved",res);
    return res*10;
})
.then((pro)=>{
    console.log("2nd Promise item is ",pro);
})
.then((item)=>{
    console.log("3rd Promise item is ",item);
})

.catch((error)=>{
    console.log("catch block error is show ",error)
})