const _items = Symbol('stackItems');

export default class Stack {
    constructor() {
        this[_items] = [];
    }
    
    push(element) {
        this[_items].push(element);
    }

    pop(){
        return this[_items].pop();
    }

    peek(){
        return this[_items][this[_items].length - 1];
    }

    isEmpty() {
        return this[_items].length === 0;
    }

    size() {
        return this[_items].length;
    }

    clear() {
        this[_items] = [];
    }

    print(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this[_items][0]}`
        for(let i = 1; i < this.size(); i++)
            objString = `${objString}, ${this[_items][i]}`

        console.log(objString);
    }
}