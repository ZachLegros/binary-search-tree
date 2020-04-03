"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    setLeft(node) {
        this.left = node;
    }
    setRight(node) {
        this.right = node;
    }
    getValue() {
        return this.value;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }
    // Method to compare to MyNode objects:
    // Returns 1 if the current node's value is bigger than the other node's value,
    // returns -1 for the opposite and returns 0 if their value is equal.
    compareTo(other) {
        if (this.value == other.value) {
            return 0;
        }
        if (this.value > other.value) {
            return 1;
        }
        return -1;
    }
}
exports.MyNode = MyNode;
