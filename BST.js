"use strict";
exports.__esModule = true;
var MyNode_1 = require("./MyNode");
var BinairySearchTree = /** @class */ (function () {
    // assuming that values is not empty
    function BinairySearchTree(values) {
        this.values = values.sort();
        var indexOfRoot = this.getRootIndex(this.values);
        var valueOfRoot = this.values[indexOfRoot];
        this.root = new MyNode_1.MyNode(valueOfRoot, null, null);
        this.build();
    }
    BinairySearchTree.prototype.getRootIndex = function (values) {
        return Math.round(values.length / 2);
    };
    // assuming that nodeToAdd has null for left and right
    BinairySearchTree.prototype.add = function (nodeToAdd, current) {
        var comparaison = nodeToAdd.compareTo(current);
        if (comparaison != 0) {
            if (comparaison > 0) {
                if (current.getRight() == null) {
                    current.setRight(nodeToAdd);
                    return;
                }
                this.add(nodeToAdd, current.getRight());
            }
            if (comparaison < 0) {
                if (current.getLeft() == null) {
                    current.setLeft(nodeToAdd);
                    return;
                }
                this.add(nodeToAdd, current.getLeft());
            }
        }
        return;
    };
    BinairySearchTree.prototype.contains = function (value) {
        var found = false;
        var current = this.root;
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
    };
    BinairySearchTree.prototype.build = function () {
        for (var i = 0; i < this.values.length; i++) {
            var nodeToAdd = new MyNode_1.MyNode(this.values[i], null, null);
            this.add(nodeToAdd, this.root);
        }
    };
    return BinairySearchTree;
}());
exports.BinairySearchTree = BinairySearchTree;
