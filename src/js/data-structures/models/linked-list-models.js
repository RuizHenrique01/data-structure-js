export class Node {
    constructor(element, next){
        this.element = element;
        this.next = next ? next : undefined;
    }
}

export class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element, next);
        this.prev = prev;
    }
}