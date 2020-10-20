export class Specification {
  isSatisfiedBy(product) {
    throw "abstract Specification class ";
  }
}

//in order to add fluent builder semantics onto the And, Or,Not
class CompositeSpecification extends Specification {
  and(spec) {
    return new And(this, new Spec(spec));
  }
  or(spec) {
    return new Or(this, new Spec(spec));
  }
  not() {
    return new Not(this);
  }
}

export class Spec extends CompositeSpecification {
  constructor(expression) {
    super();
    this.expression = expression;
  }
  isSatisfiedBy(product) {
    return this.expression(product);
  }
}

class And extends CompositeSpecification {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  isSatisfiedBy(product) {
    return this.left.isSatisfiedBy(product) && this.right.isSatisfiedBy(product);
  }
}
class Or extends CompositeSpecification {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  isSatisfiedBy(product) {
    return  this.left.isSatisfiedBy(product) || this.right.isSatisfiedBy(product);
  }
}
class Not extends CompositeSpecification {
  constructor(spec) {
    super();
    this.spec = spec;
  }
  isSatisfiedBy(product) {
    return !this.spec.isSatisfiedBy(product);
  }
}
