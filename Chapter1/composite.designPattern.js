var demo = function () {
  class Discount {
    getDiscountedPrice() { }
  }
  class BasicDiscount extends Discount {
    constructor(discount) {
      super();
      this.discount = discount;
    }
    getDiscountedPrice(price) {
      return this.discount * price;
    }
  }
  class CompositeDiscount extends Discount {
    constructor() {
      super();
      this.discounts = [];
    }
    addDiscount(discount) {
      this.discounts.push(discount);
      return this;
    }
    getDiscountedPrice(price) {
      return price - this.discounts.reduce((sum, discount) =>
        sum + discount.getDiscountedPrice(price), 0)
    }
  }
  var discountComposite = new CompositeDiscount()
    .addDiscount(new BasicDiscount(0.1))
    .addDiscount(new BasicDiscount(0.2));

  console.log(discountComposite.getDiscountedPrice(100))
}



module.exports = demo;


