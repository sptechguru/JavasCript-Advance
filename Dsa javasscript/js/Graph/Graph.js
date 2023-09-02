console.log('Graph in Dsa for js ');


class Graph {

    constructor() {
        this.adjacenList = [];
    }


    addVertex(value) {
        if (!this.adjacenList[value]) {
            this.adjacenList[value] = [];
        }
    }

    addEdges(v1, v2) {
        console.log("Add Edges", v1, v2);
        if (!this.adjacenList[v1]) {
            this.addVertex(v1);
        }
        if (!this.adjacenList[v2]) {
            this.addVertex(v2);
        }
        this.adjacenList[v1].push(v1);
        this.adjacenList[v2].push(v2);
    }


    removeEdge(v1, v2) {
        console.log("Remove Edges", v1, v2)
        this.adjacenList[v1] = this.adjacenList[v1].filter((item) => {
            return item != v1;
        });
        this.adjacenList[v2] = this.adjacenList[v2].filter((item) => {
            return item != v2;
        });
        console.log("Remove for Showing Edges", this.adjacenList)
    }

    removeVertex(vertex) {
        console.log("Remove vertex", vertex)
        if (!this.adjacenList[vertex]) {
            return false;
        }
        for (let item of this.adjacenList[vertex]) {
            console.log("Remove Ver.......", item)
            this.removeEdge(vertex, item);
        }
        delete this.adjacenList[vertex];
    }


}

let graphObj = new Graph();

// Add a Vertex
graphObj.addVertex('A');
graphObj.addVertex('B');
graphObj.addVertex('C');
graphObj.addVertex('D');

// Add Edges for Conceted a node
graphObj.addEdges('A', 'C');
graphObj.addEdges('A', 'B');
graphObj.addEdges('B', 'C');
graphObj.addEdges('B', 'D');



// Remove Edges for 
graphObj.removeEdge('A', 'C');


// Remove Vertex for 
graphObj.removeVertex('B');


console.log(graphObj.adjacenList);