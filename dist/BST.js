"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyNode_1 = require("./MyNode");
class BinarySearchTree {
    // assuming that values is not empty
    constructor(values) {
        this.values = values.sort();
        const indexOfRoot = this.getRootIndex(this.values);
        const valueOfRoot = this.values[indexOfRoot];
        this.root = new MyNode_1.MyNode(valueOfRoot, null, null);
        this.build();
        this.traversed = "";
    }
    getRootIndex(values) {
        return Math.round(values.length / 2);
    }
    getRoot() {
        return this.root;
    }
    // assuming that nodeToAdd has null for left and right
    add(nodeToAdd, current) {
        const comparaison = nodeToAdd.compareTo(current);
        if (comparaison != 0) {
            if (comparaison > 0) {
                if (current.getRight() == null) {
                    current.setRight(nodeToAdd);
                    return true;
                }
                return this.add(nodeToAdd, current.getRight());
            }
            if (comparaison < 0) {
                if (current.getLeft() == null) {
                    current.setLeft(nodeToAdd);
                    return true;
                }
                return this.add(nodeToAdd, current.getLeft());
            }
        }
        else {
            return false;
        }
    }
    contains(value) {
        let found = false;
        let current = this.root;
        while (!found && current != null) {
            if (value == current.getValue()) {
                found = true;
            }
            else if (value > current.getValue()) {
                current = current.getRight();
            }
            else {
                current = current.getLeft();
            }
        }
        return found;
    }
    build() {
        for (var i = 0; i < this.values.length; i++) {
            let nodeToAdd = new MyNode_1.MyNode(this.values[i], null, null);
            this.add(nodeToAdd, this.root);
        }
    }
    inOrder() {
        this.traversed = "";
        this.traverseInOrder(this.root);
        return this.traversed;
    }
    traverseInOrder(current) {
        if (current != null) {
            this.traverseInOrder(current.getLeft());
            this.traversed += `${current.getValue()}; `;
            this.traverseInOrder(current.getRight());
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
