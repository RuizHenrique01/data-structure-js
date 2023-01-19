import Node from "../models/linked-list-models";
import { defaultEquals } from "../utils/defaultEquals";

export default class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    getElementAt(index){
        if(index >= 0 && index < this.count){
            let node = this.head;
            for(let i = 0; i < index && node != null; i++){
                node = node.next;
            }

            return node;
        }
        return undefined;
    }

    removeAt(index){
        if(index >= 0 && index < this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.current;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}