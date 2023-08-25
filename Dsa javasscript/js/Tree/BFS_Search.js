console.log("Create Breadth First Search Tree in Dsa in Javascript ");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BFSTree {
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

    //  Tree a Searching a Node for tree Values 

    search(root, searchTerm) {
        if (root === null) {
            return false;
        }
        else if (root.value === searchTerm) {
            return `Your Search Result : ${searchTerm}`;
        }
        else if (root.value > searchTerm) {
            return this.search(root.left, searchTerm);
        }
        else {
            return this.search(root.right, searchTerm);
        }
    }

    // //////////////////// BFS First Search in Tree Open /////////////////////////////////

    Bfs_Search_Traversing() {
        let queueList = [];
        queueList.push(this.root);
        while (queueList.length) {
            let current = queueList.shift();
            if (current.left) {
                queueList.push(current.left);
            }
            if (current.right) {
                queueList.push(current.right);
            }
            console.log('BFS Search Traversing', current.value);

            // return current.value;

        }

    }

    // //////////////////// BFS First Search in Tree Closed /////////////////////////////////


    //  find Min & Max Value in Tree 

    maxTree(root) {
        if (!root.right) {
            return root.value;
        }
        else {
            return this.maxTree(root.right)
        }
    }

    minTree(root) {
        if (!root.left) {
            return root.value;
        }
        else {
            return this.minTree(root.left)
        }
    }

    //  find Min & Max Value in Tree 


    // Delete tree Values 

    reMoveData(value) {
        return this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return null;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        }
        else {
            if (!root.left && !root.right) {
                return null;
            }
            else if (!root.left) {
                return root.right;
            }
            else if (!root.right) {
                return root.left;
            }

            root.value = this.minTree(root.right);
            root.right = this.deleteNode(root.right, root.value);

        }

        return root;
    }





}

let bst = new BFSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
bst.makeTree(4000);
bst.makeTree(23);
bst.Bfs_Search_Traversing();

console.log('Search tree', bst.search(bst.root, 10));
console.log('Min Tree Value', bst.minTree(bst.root));
console.log('Max Tree Value', bst.maxTree(bst.root));

bst.reMoveData(4000);
// bst.Bfs_Search_Traversing();
console.log(bst);