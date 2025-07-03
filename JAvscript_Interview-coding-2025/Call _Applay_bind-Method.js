// Call method
// Defination : The call() method calls a function with a given this value and arguments 
// provided individually.

let obj = {
    name: "Santosh",
    designation: "Full Stack Developer"
}

let getDetail = function (state, country) {
    console.log("Name is ", this.name, 'And Postion is ', this.designation, 'state is :', state, '&', country);
}
getDetail.call(obj);


let apply = getDetail.apply(obj, ['Mah', 'India']); // => with apply you can send arguments as array for used
console.log(apply);

let funReference = getDetail.bind(obj, "Indore", "India");
funReference();  /// Bind for using in fuction i annoymus function 


