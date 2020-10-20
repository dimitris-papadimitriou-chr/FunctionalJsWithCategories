export class Product {
    constructor(price, name) {
      this._price = price;
      this._name = name;
    }
    get name() {
      //getter and setters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
      return this._name;
    }
  
    get price() { 
      return this._price;
    }
    static get name() {
      return c => c._name;
    }
  }
  