console.log("Create Depth First Search Tree in Dsa in Javascript ");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DFSTree {
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

    search(root, searchTerm){
      if(root === null){
        return false;
      }
      else if(root.value === searchTerm){
        return `Your Search Result : ${searchTerm}`;
      }
      else if(root.value > searchTerm){
        return this.search(root.left, searchTerm);
      }
      else{
        return this.search(root.right, searchTerm);
      }
    }

    // //////////////////// Depth  First Search in Tree Open /////////////////////////////////

    preOrder(root){
      if(root){
        console.log('Preorder Values :',root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }

    inOrder(root){
        if(root){
          this.inOrder(root.left);
          console.log('InOrder Values :',root.value);
          this.inOrder(root.right);
        }
      }

      postOrder(root){
        if(root){
          this.postOrder(root.left);
          this.postOrder(root.right);
          console.log('PostOrder Values :',root.value);

        }
      }

///////////////////////// Depth  First Search in Tree Closed /////////////////////////////////


}

let bst = new DFSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)
console.log('Search tree',bst.search(bst.root, 10))


console.log(bst);