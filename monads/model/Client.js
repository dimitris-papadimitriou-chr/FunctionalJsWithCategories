export class Client {
  constructor(id, name, employeeId) {
    this.id = id;
    this._name = name;
    this._employeeId = employeeId;
  }
  get name() {
    //getter and setters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    return this._name;
  }
  get employeeId() {
    //getter and setters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    return this._employeeId;
  }
  set name(x) {
    this._name = x;
  }

  //static lenses 
  static get name() {
    return c => c._name;
  }

  static get employeeId() {
    return c => c.employeeId;
  }
}
