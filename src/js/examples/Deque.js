import Deque from "../data-structures/queue/deque";

 const deque = new Deque();

 console.log(deque.isEmpty());
 deque.addBack('John');
 deque.addBack('Jack');
 console.log(deque.toString());
 deque.addBack('Camila');
 console.log(deque.toString());
 console.log(deque.size());
 console.log(deque.isEmpty());
 deque.removeFront();
 console.log(deque.toString());
 deque.removeBack();
 console.log(deque.toString());
 deque.addFront('John');
 console.log(deque.toString());
