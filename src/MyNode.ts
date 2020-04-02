interface BSTNode {
    setLeft(node: MyNode): void;
    setRight(node: MyNode): void;
    getValue(): number;
    getLeft(): MyNode;
    getRight(): MyNode;
    compareTo(other: MyNode): number;
}
class MyNode implements BSTNode {
    private value: number;
    private left: MyNode;
    private right: MyNode;

    constructor(value: number, left: MyNode, right: MyNode) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    public setLeft(node: MyNode): void {
        this.left = node;
    }

    public setRight(node: MyNode): void {
        this.right = node;
    }

    public getValue(): number {
        return this.value;
    }

    public getLeft(): MyNode {
        return this.left;
    }

    public getRight(): MyNode {
        return this.right;
    }

    // Method to compare to MyNode objects:
    // Returns 1 if the current node's value is bigger than the other node's value,
    // returns -1 for the opposite and returns 0 if their value is equal.
    public compareTo(other: MyNode): number {
        if (this.value == other.value) {
            return 0;
        }
        if (this.value > other.value) {
            return 1;
        }
        return -1;
    }
}

export { MyNode };
