console.log("Welcome to Programiz for interviewBit!");
const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[10] = 60;
console.log(arrayOfOddNumbers.length)
console.log(arrayOfOddNumbers)


const arrayOfNumbers = [1, 2, 3, 4];
let res = arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 4);
console.log('reduce ....',res)


let arrayOfLetters = ['a','b','c','d','e','f'];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
console.log(anotherArrayOfLetters);


// Without destructuring:
const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log( "Address 1: " + address[0],"Address 2: " + address[1],
  "Address 3: " + address[2]
);
// With destructuring:

const [address1, address2, address3] = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log(
  "Address 1: " + address1,
  "Address 2: " + address2,
  "Address 3: " + address3
);

// Top 10 Technical interview in javascript 

//  closures 

const outerFunction =() =>{
    let outerVariable = 'Hello Santosh';
    const  innerFunction=()=> {
      console.log(outerVariable);
    }
    return innerFunction;
  }
 let a = outerFunction();
  a(); // Output: Hello


//   How to handle error in javascript  using try catch

try {
    let x = 1 / 0;
    if (!Number.isFinite(x)) {
      throw new Error('Division by zero');
    }
  } catch (error) {
    console.error(error);
  }


  // Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
let multiply = function(a, b) {
  return a * b;
}

function doSomething() {
    console.log(this);
  }
     
  // doSomething();



  var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
// obj.getName();

var obj1 = {
  address : "Mumbai,India",
  getAddress: function(){
  console.log(this.address); 
}
}
 
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
// obj2.getAddress();      //get error in obj2 not getting getAdress Method


//  call method is argument is used in obj ;

function saySomething(message){
  return this.name + " is " + message;
}     
var person4 = {name:  "Santosh"};     
// let cal =saySomething.call(person4, "awesome");
// console.log(cal);



function saySomethingApply(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
// console.log(saySomethingApply.apply(person4, ["awesome"]));


function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
  console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  // return sum;
  operation(sum);
}

let sum= operationOnSum(3, 3, divideByHalf); // Outputs 3
console.log('divide',sum);

let d = operationOnSum(5, 5, multiplyBy2); // Outputs 20
console.log('multiply',d);


//  that is Memomization in function
function addTo256(num){
  return num + 25;
}
console.log(addTo256(20)); // Returns 45




