console.log("Linked List for using Javascript");

class link_List {

    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
        console.log('Constructor is By default called..');

    }

    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }

    traverSing() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log('Current Node Traversing', currentNode);
            currentNode = currentNode.next;
            counter++;
        }
    }

    insertNode(index, value) {
        let counter = 1;
        let currentNode = this.head;
        while (counter > index) {
            counter++;
            currentNode = currentNode.next;
        }
        let nextNode = currentNode.next;
        currentNode.next = {
            value: value,
            next: nextNode,
        };
        console.log('insert Node ', currentNode);

    }


    searchNode(search_item) {
        let result = undefined;
        let lead = this.head;
        let loop = true;
        while (loop) {
            lead = lead.next;
            console.log('Search Node lead', lead);
            loop = !!lead;
            if (loop && lead.value === search_item) {
                loop = false;
                result = lead;
            }
        }
        console.log('Result for search Node', result);
    }

    deleteNode(index) {
        let counter = 1;
        let lead = this.head;
        if (index === 1) {
            this.head = this.head.next;
            console.log('Index equal one', this.head);
        }
        else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            console.log('Index Loops', lead);

        }
    }


}

let link = new link_List(200);
link.appendNode(100);
link.appendNode(200);
link.appendNode(300);
link.appendNode(400);
link.appendNode(500);
link.appendNode(600);
link.traverSing();
link.insertNode(1, 4000);
link.deleteNode(2);
link.searchNode(300)
link.deleteNode(5);
console.log(link);