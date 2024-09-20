console.log(`Curring is javascript is Process in functional programing transform function with 
    multiple arguments into sequence of nesting fuctions.`);

function Addition(a){
    return function(b){
        return function(c){
            return a + b+ c;
        }
    }
}

let res = Addition(2)(4)(2);
console.log(res);


// infinte curring object 
function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;    
    }
}

console.log(add(4)(5)(7)());
