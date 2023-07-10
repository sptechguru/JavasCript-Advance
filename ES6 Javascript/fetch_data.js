// fetch method is return Promise

            
let data = fetch("https://dummyjson.com/comments");
data.then((res)=>{
    console.log(res);
    return res.json();
    
})
.then((result)=>{
    return res.json();
    console.log("2nd Output is",result);
})

.catch((err)=>{
    console.log(err);
})