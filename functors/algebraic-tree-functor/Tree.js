export class Tree { }
    
export class Leaf extends Tree {
    constructor(value) {
        super()
        this.value = value;
    }
    map(f) {
        return new Leaf(f(this.value));
    }
    show() {
        return `Leaf(${this.value})` //for display purposes 
    }
}

export class Node extends Tree {
    constructor(left, right) {
        super()
        this.left = left;
        this.right = right;
    }
    map(f) {
        return new Node(this.left.map(f), this.right.map(f));
    }

    show() {
        return `Node(${this.left.show()},${this.right.show()})`; //for display purposes 
    }
}