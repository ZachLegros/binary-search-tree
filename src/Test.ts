import { BinarySearchTree } from "./BST";
import now from "performance-now";
import { MyNode } from "./MyNode";

let values = [];
let size = 10000;
const testVal0 = 135;
const testVal1 = 5;

for (var i = 0; i < size; i++) {
    values.push(Math.floor(Math.random() * size));
}

// console.log("Values: " + values);

let t0 = now();

let bst = new BinarySearchTree(values);

let t1 = now();

const found = bst.contains(testVal0);

let t2 = now();

let added = bst.add(new MyNode(testVal1, null, null), bst.getRoot());

let t3 = now();

const traversed = bst.inOrder();

let t4 = now();

size += 1;

console.log("Depth: " + Math.floor(Math.log2(size)));
console.log("Root value: " + bst.getRoot().getValue());

console.log(
    `Time taken to create tree of ${size - 1} elements: ${(t1 - t0).toFixed(
        3
    )} milliseconds`
);

console.log(
    `${
        found == true ? "Successfully" : "Unsuccessfully"
    } found ${testVal0} in ${(t2 - t1).toFixed(3)} milliseconds`
);

console.log(
    `${
        added == true ? "Successfully" : "Unsuccessfully"
    } added ${testVal1} in ${(t3 - t2).toFixed(3)} milliseconds`
);

console.log(
    `Time taken to traverse tree of ${size} elements: ${(t4 - t3).toFixed(
        3
    )} milliseconds`
);

// console.log("Tree in order: " + traversed);

bst = null;
