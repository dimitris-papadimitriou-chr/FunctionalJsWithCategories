export class Client {
    constructor(id, name) {
      this.id = id;
      this._name = name;
    }
    get name() {
      //getter and setters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
      return this._name;
    }
    set name(x) {
      this._name = x;
    }
  
    static get name() {
      return c => c._name;
    }
  }
  