import { Compare } from "../utils/compare";
import { defaultCompare } from "../utils/defaultCompare";
import { Node } from "../models/binary-search-tree-model";

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key) {
        if(this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key){
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            if(node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if(node.right === null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if(node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback){
        if(node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    posOrderTraverse(callback) {
        this.posOrderTraverseNode(this.root, callback);
    }

    posOrderTraverseNode(node, callback){
        if(node != null){
            this.posOrderTraverseNode(node.left, callback);
            this.posOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
}