import { MinHeap } from "../data-structures/MinHeap/MinHeap";

let heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap Size: ', heap.size());
console.log('Heap Is Empty: ', heap.isEmpty());
console.log('Heap Min Value: ', heap.findMinimum());

heap = new MinHeap();
for(let i = 1; i < 10; i++){
    heap.insert(i);
}
console.log('Extract minimum: ', heap.extract());