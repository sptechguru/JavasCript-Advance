console.log("Create Basiscs Tree in Dsa in Javascript ");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    isTreeEmpty() {
        return this.root === null;
    }

    makeTree(val) {
        let newNode = new Node(val);
        if (this.isTreeEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);   // that is Recursion function called
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }


    }

}

let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);



console.log(bst);