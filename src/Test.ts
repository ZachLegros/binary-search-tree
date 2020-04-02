import { BinairySearchTree } from "./BST";
import now from "performance-now";

let values = [];
const size = 20000;

for (var i = 0; i < size; i++) {
    values.push(Math.floor(Math.random() * 100000));
}

let t0 = now();

let bst = new BinairySearchTree(values);

let t1 = now();

console.log(bst.contains(-1));

let t2 = now();

console.log(
    `Time taken to create tree of ${size} elements: ${(t1 - t0).toFixed(
        3
    )} milliseconds`
);
console.log(
    `Time taken to search for one element: ${(t2 - t1).toFixed(3)} milliseconds`
);
