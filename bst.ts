interface BSTNode {
    setLeft(value: Number): void;
    setRight(value: Number): void;
    getValue(): Number;
    getLeft(): MyNode;
    getRight(): MyNode;
}

class MyNode implements BSTNode {
    private value: Number;
    private left: MyNode;
    private right: MyNode;

    constructor(value: Number, left: MyNode, right: MyNode) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    public setLeft(value: Number): void {
        this.left = new MyNode(value, null, null);
    }

    public setRight(value: Number): void {
        this.right = new MyNode(value, null, null);
    }

    public getValue(): Number {
        return this.value;
    }

    public getLeft(): MyNode {
        return this.left;
    }

    public getRight(): MyNode {
        return this.right;
    }
}

class BinairySearchTree {
    private root: MyNode;
    private set: Array<Number>;

    constructor(set: Array<Number>) {
        this.set = set.sort();
        const indexOfRoot = this.getRootIndex(this.set);
        this.root = new MyNode();
    }

    private getRootIndex(set: Array<Number>): Number {
        return Math.round(set.length / 2);
    }
}
