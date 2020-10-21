export class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //static lenses 
    static get name() {
        return c => c.name;
    }
}
