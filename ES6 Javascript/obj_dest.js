
console.log("object Destructuring is values iterates used is keys ");

let objs = { name:"sani",age:12,email:"sani@gmail.com", dob:'16/04/1998'};
let {name,...dob} = objs;
console.log(objs);


console.warn(name);
console.warn(age);
console.warn(email);
console.log(['dob']);
console.log(mob);
