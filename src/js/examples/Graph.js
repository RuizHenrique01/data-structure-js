import { BFS, Graph, breadthFirstSearch } from "../data-structures/graph/graph";

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(let i in myVertices){
    graph.addVertex(i);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

const printVertex = (value) => console.log('Visited vertex: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertex);

const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);