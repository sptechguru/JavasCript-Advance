// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let arr  = [
    {
    name:"xy",
    age:15
  },

   {
    name:"ab",
    age:20
  },
  
  {
    name:"ab",
    age:19
  }

];


let res = arr.filter((item)=>{
    if(item.age > 18 ){
        let list = [];
        const obj = {
            name: item.name = "Santosh Pal",
            age: item.age,
        }
      list.push(obj)
      let sortName =  list.sort((a,b) => b.name- a.name);
    //   sortName = arr;
      console.log(sortName)
    }
})


