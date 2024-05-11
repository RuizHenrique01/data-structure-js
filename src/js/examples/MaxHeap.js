import { MaxHeap } from "../data-structures/maxHeap/maxHeap";

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log('Heap Size: ', maxHeap.size());
console.log('Heap Is Empty: ', maxHeap.isEmpty());
console.log('Heap Min Value: ', maxHeap.findMinimum());