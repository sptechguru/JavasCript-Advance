let stckDef  = `
Stack is a very useful data structure and has a wide range 
of application. Stack is a linear data structure in 
which addition or removal of element follows a particular order i.e.
LIFO(Last in First Out) AND FILO(First in Last Out). `;

class Stack {

    constructor() {
        this.stackList = [];
    }

    push(item) {
        this.stackList.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return 'your Stack is Empty..'
        }
        return this.stackList.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return 'your Peek is Empty..'
        }
        return this.stackList[this.sizeofStack() - 1];
    }


    isEmpty() {
        return this.sizeofStack() === 0;

    }

    sizeofStack() {
        return this.stackList.length;
    }


}

let stObj = new Stack(); //  This one is object here ......

stObj.push(30);
stObj.push(150);
stObj.push(300);

console.log(stObj.peek())
console.log(stObj.pop())
console.log(stObj.pop())
console.log(stObj.peek())


