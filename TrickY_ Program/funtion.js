const sayHi = () =>{
    console.log(name);
    console.log(age);
    var name = "santosh";
    let  age = 21;
 }

sayHi();

// Error Show

//  let key bord this console.error();
//  Uncaught ReferenceError: Cannot access 'age' before initialization
//     at sayHi (<anonymous>:3:17)
//     at <anonymous>:8:1

// var keyBord is show undefined value


// sayHi('df',45);

// console.log(test());
// VM1679:1 Uncaught ReferenceError: test is not defined
//     at <anonymous>:1:13

// 2nd step

let test =  (()=>{
    console.warn("Test Function is called");
})

// After that is execute program
console.log(test());

