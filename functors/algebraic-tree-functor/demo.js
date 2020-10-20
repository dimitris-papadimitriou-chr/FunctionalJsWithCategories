import { Node, Leaf } from "./Tree.js"

export function demo() {

    var instance = new Node(new Node(new Leaf(4), new Leaf(5)), new Leaf(7));

    console.log(instance.show());

    console.log(`after using map`);
    
    console.log(instance.map(x => x + 1).show());
}
