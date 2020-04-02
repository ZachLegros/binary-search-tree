"use strict";
exports.__esModule = true;
var BST_1 = require("./BST");
var values = [];
for (var i = 0; i < 100; i++) {
    values.push(Math.floor(Math.random() * 1000));
}
var bst = new BST_1.BinairySearchTree(values);
console.log(bst.contains(values[10]));
console.log(bst.contains(5));
