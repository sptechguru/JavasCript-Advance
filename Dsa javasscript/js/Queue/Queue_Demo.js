

class Queueue {
  constructor(){
    this.queueList = [];
  }

 enQueue(items){
    this.queueList.push(items);
}

  deQueue(){
    if(this.isEmpty()){
        return 'UnderFlow is Dequeue is ..';
    }
   return this.queueList.shift();
  }


  isEmpty(){
    return this.sizeOfQueue() === 0;
  }

  sizeOfQueue(){
    return this.queueList.length;
  }

  front(){
    if(this.isEmpty()){
        return 'No Elements in this Queue';
    }
    return this.queueList[0];
  }

  printQueue(){
    let finalQueueStr = '';
    for (let i = 0; i < this.sizeOfQueue(); i++) {
         finalQueueStr =+  this.queueList[i] + " ," ;       
    }
    console.log("QueueStr: ", finalQueueStr);
  }
}


let queObj = new Queueue(); //  This one is object here ......

queObj.enQueue(30);
queObj.enQueue(150);
queObj.enQueue(300);

queObj.deQueue();
queObj.deQueue();
queObj.deQueue();

console.log(queObj.printQueue());
console.log(queObj.front());
