let obj = {
    name:"Santosh"
}

var b1 =20;
const chaGeName = (cname,num)=>{
 cname.name = "sani";
 num.b = 50;
}
chaGeName(obj, b1);

console.log(obj.name, b1);



console.log('first');
setTimeout(() => {
  console.log('setTimeout'); //=> this will get called last 
}, 0);
console.log('last'); 


function a() {
    b();
    console.log("a");
}
function b() {
    console.log("b");
}
a();

// //////////////////////////////////////////////////////////


var userName = "Hemant";
function b() { 
    setTimeout(print, 0); 
    console.log(userName); 
    var userName = "Nikhil"; 
}
console.log(userName);
function print() {
    console.log(userName);
}
b();

// //////////////////////////////////////////////////////////

var name = "Nikhil";
var person = {
    name: "Hemant",
    age: 30,
    getDetail: function () {
        console.log('getDetail ' +this.name);
    },
    getName: () => {
        console.log('getName '+this.name);
    }
}
function printname() {
 console.log('printname '+this.name); 
}
person.getDetail();
person.getName();

var addPerson = {
    name: "SAchin"
}
var fun = printname.bind(addPerson, '','');
fun();


var obj2 = {
	a: "hello world Santosh",
	b: 42
};
var b = 'a';
console.log(obj2[b]);             
console.log(obj2["b"]);


///////////////////////////////////////////////////////////////////////

// function print() {
//     setTimeout(function(){
//         console.log(name);
//     },1000);
//     var name="Demo";
// }
// print();


function print(){
    var name ="Angular";
    function printName(){
        name="Javascript";
        console.log(name);
    }
    console.log(name);
    printName();
}
print();


