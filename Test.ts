import { BinairySearchTree } from "./BST";
let values = [];

for (var i = 0; i < 100; i++) {
    values.push(Math.floor(Math.random() * 1000));
}

let bst = new BinairySearchTree(values);

console.log(bst.contains(values[10]));
console.log(bst.contains(5));
