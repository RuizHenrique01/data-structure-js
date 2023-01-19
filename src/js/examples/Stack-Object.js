import Stack from "../data-structures/stack/stack";

const stack = new Stack();

stack.push(5);
stack.push(8);

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);