import BinarySearchTree from "../binarySearchTree/binarySearchTree";
import { BalanceFactor } from "../utils/balanceFactor";
import { defaultCompare } from "../utils/defaultCompare";

class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    getNodeHeigth(node){
        if(node == null) {
            return -1;
        }

        return Math.max(
            this.getNodeHeigth(node.left), this.getNodeHeigth(node.right)
        ) + 1; 
    }

    getBalanceFactor(node) {
        const heigthDifference = this.getNodeHeigth(node.left) - this.getNodeHeigth(node.right);

        switch(heigthDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }
}