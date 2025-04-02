import Dictionary from "../dictionary/dictionary";
import Queue from '../queue/queue';

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}

const initializeColor = vertices => {
    const color = {};
    for(let i = 0; i < vertices.length; i++){
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}

export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex);
    while(!queue.isEmpty()){
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for(let i = 0; i< neighbors.length; i++){
            const w = neighbors[i];
            if(color[w] === Colors.WHITE){
                color[w]= Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if(callback){
            callback(u);
        }
    }
}

export const BFS = (graph, startVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    const distance = {};
    const predecessor = {};
    queue.enqueue(startVertex);
    for(let i = 0; i < vertices.length; i++){
        distance[vertices[i]] = 0;
        predecessor[vertices[i]] = null;
    }
    while(!queue.isEmpty()){
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for(let i = 0; i< neighbors.length; i++){
            const w = neighbors[i];
            if(color[w] === Colors.WHITE){
                color[w] = Colors.GREY;
                distance[w] = distance[u] + 1;
                predecessor[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distance,
        predecessor
    };
}

export class Graph {
    constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    addVertex(v) {
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    addEdge(v, w) {
        if(!this.adjList.get(v)){
            this.addVertex(v);
        }

        if(!this.adjList.get(w)){
            this.addVertex(w);
        }

        this.adjList.get(v).push(w);
        if(!this.isDirected){
            this.adjList.get(w).push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';
        for(let i = 0; i < this.vertices.length; i++){
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]);
            for(let j = 0; j < neighbors.length; j++){
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }
}