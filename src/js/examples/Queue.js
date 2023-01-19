import Queue from "../data-structures/queue/queue";

 const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());