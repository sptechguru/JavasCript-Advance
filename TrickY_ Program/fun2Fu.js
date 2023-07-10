function crete(a){
    return (b)=>{
        return a+b;
    }
}


var s = crete(20);

console.log(s(18));
console.log(s(8));


let temp = {
    a:10,
    b:20,
    sum(){
        return this.a + this.b;
    },
    multi(){
        return this.a * this.b;
    },
};

console.log(temp);
console.log(temp.sum());
console.log(temp.multi());
