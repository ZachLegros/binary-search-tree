import { MyNode } from "./MyNode";

class BinairySearchTree {
    private root: MyNode;
    private values: number[];

    // assuming that values is not empty
    constructor(values: number[]) {
        this.values = values.sort();
        const indexOfRoot = this.getRootIndex(this.values);
        const valueOfRoot = this.values[indexOfRoot];
        this.root = new MyNode(valueOfRoot, null, null);
        this.build();
    }

    private getRootIndex(values: number[]): number {
        return Math.round(values.length / 2);
    }

    // assuming that nodeToAdd has null for left and right
    public add(nodeToAdd: MyNode, current: MyNode): void {
        const comparaison = nodeToAdd.compareTo(current);
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
    }

    public contains(value: number): boolean {
        let found: boolean = false;
        let current: MyNode = this.root;
        while (!found && current != null) {
            if (value == current.getValue()) {
                found = true;
            } else if (value > current.getValue()) {
                current = current.getRight();
            } else {
                current = current.getLeft();
            }
        }
        return found;
    }

    private build(): void {
        for (var i = 0; i < this.values.length; i++) {
            let nodeToAdd = new MyNode(this.values[i], null, null);
            this.add(nodeToAdd, this.root);
        }
    }
}

export { BinairySearchTree };
