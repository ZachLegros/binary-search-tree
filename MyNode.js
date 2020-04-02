"use strict";
exports.__esModule = true;
var MyNode = /** @class */ (function () {
    function MyNode(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    MyNode.prototype.setLeft = function (node) {
        this.left = node;
    };
    MyNode.prototype.setRight = function (node) {
        this.right = node;
    };
    MyNode.prototype.getValue = function () {
        return this.value;
    };
    MyNode.prototype.getLeft = function () {
        return this.left;
    };
    MyNode.prototype.getRight = function () {
        return this.right;
    };
    // Method to compare to MyNode objects:
    // Returns 1 if the current node's value is bigger than the other node's value,
    // returns -1 for the opposite and returns 0 if their value is equal.
    MyNode.prototype.compareTo = function (other) {
        if (this.value == other.value) {
            return 0;
        }
        if (this.value > other.value) {
            return 1;
        }
        return -1;
    };
    return MyNode;
}());
exports.MyNode = MyNode;
