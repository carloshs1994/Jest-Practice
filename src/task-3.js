class Calculator {
  constructor(a, b) {
    this.firstParameter = a;
    this.secondParameter = b;
  }

  add() {
    return this.firstParameter + this.secondParameter;
  }

  subtract() {
    return this.firstParameter - this.secondParameter;
  }

  divide () {
    if (this.secondParameter !== 0) return (this.firstParameter / this.secondParameter);
    return 'Math Error';
  }

  multiply () {
    return this.firstParameter * this.secondParameter;
  }
}

module.exports = Calculator;