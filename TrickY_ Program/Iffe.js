// Es6 fat arrow Function Syntax

(()=>{
 a = b =3;
})();

(function(){
a= b =4;
})();

console.warn(a);
console.warn(b);

console.warn(typeof a);
console.warn(typeof b);

(()=>{
console.log("Iffe is called");
})()
