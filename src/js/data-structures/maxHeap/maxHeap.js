import { MinHeap } from "../MinHeap/MinHeap";
import { defaultCompare } from "../utils/defaultCompare";
import { reverseCompare } from "../utils/reverseCompare";

export class MaxHeap extends MinHeap {
    constructor(comapreFn = defaultCompare){
        super(comapreFn);
        this.compareFn = reverseCompare(comapreFn);
    }
}