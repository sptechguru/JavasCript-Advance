// spread operator with inner object


let a = {
    name:"Javascript",
    address: {
        city:'Mumbai'
    }
};
let b ={...a};
console.log(b);
b.name = "Angular";
b.address.city = "Pune";
console.log(a.name);
console.log(b.name);
console.log(a.address.city);
console.log(b.address.city);

// ///////////////////////////////////////////////////////////////////////////////////////////////////

const player1 ={
    name:'Sachin',
    age:22,
    designation: 'Batsman'
}
let player2 = {...player1,name:"Santosh Pal"};
console.log(player2)

// ///////////////////////////////////////////////////////////////////////////////////////////////////


const player ={
    name:'Sani',
    age:22,
    designation: 'Batsman'
} 
const {name,...remaining} = player;
console.log(name)
console.log(remaining)


// ///////////////////////////////////////////////////////////////////////////////////////////////////


var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo); 
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func(); 

